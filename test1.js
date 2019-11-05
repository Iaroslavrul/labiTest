// function deleteTextNodesRecursive(where, arrChild = ["body"]) {
//     let arrOfElWithChild = arrChild;
//     // if (where.hasChildNodes()) arrOfElWithChild.push(where);
//     let childOfWhere = where.childNodes;
//     for (let i = 0; i < childOfWhere.length;) {
//         if (childOfWhere[i].nodeType === 8) {
//             // console.log("find text");
//             childOfWhere[i].remove();
//             // continue;
//         } else i++;
//         try {
//             if (childOfWhere[i].hasChildNodes()) arrOfElWithChild.push(childOfWhere[i]);
//         } catch (e) {
//             console.log(e);
//         }
//
//     }
//     arrOfElWithChild.splice(0, 1);
//     // console.log(arrOfElWithChild);
//     while (arrOfElWithChild.length !== 0) {
//         deleteTextNodesRecursive(arrOfElWithChild[0], arrOfElWithChild);
//     }
// }
//
// deleteTextNodesRecursive(document.body);


const commentRemover = (elem) => {
    if (elem.nodeType === 8) {
        elem.remove();
    }
};
const getChildren = (element) => {
    const childElements = [...element.childNodes];
    if (childElements.length > 0) {
        childElements.map(elem => {
            commentRemover(elem);
            if (elem.childNodes) {
                getChildren(elem);
            }
        })
    }
};

getChildren(document.body);
