const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');
const code = readFileSync('./test1.js', 'utf-8');
const RegExpForLineComment = /\/\/.*?$/gm;
const RegExpForBlockComment = /\/\*([\s\S]*?)\*\//gm;
const RegExpForEmptyLine = /\n(\n)*( )*(\n)*\n/gm;
let tags = ['\'', '"', '`'],
    res;


const handleStringArray = arr => {
    let [a = [], ...b] = arr;
    arr = b.join('')
        .replace(RegExpForBlockComment, '')
        .replace(RegExpForLineComment, '')
        .replace(RegExpForEmptyLine, '\n\n');
    return [[...a, arr].join('')];
};

const removeComments = (code) => {
    code = '\n' + code;
    const length = code.length;
    let parsedStrArr = [];
    for (let i = 0; i < length; i++) {
        parsedStrArr.push(code[i]);
        if (tags.includes(code[i])) {
            let tag = code[i];
            let start = i;
            parsedStrArr = handleStringArray(parsedStrArr);
            while (1) {
                start++;
                parsedStrArr.push(code[start]);
                if (code[start] === tag) {
                    parsedStrArr = [parsedStrArr.join('')];
                    i = start;
                    break;
                }
            }
        }
    }
    return res = handleStringArray(parsedStrArr).join('').slice(1, length);
};
writeFileSync('message.js', removeComments(code));