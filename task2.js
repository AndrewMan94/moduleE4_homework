const obj = {
    'id': 1,
    'name': "name",
    'prop': 'property'
}
function getObjStr(obj, str) {
    return obj[str] === undefined ? false : true
}

console.log(getObjStr(obj, 'id'))
console.log(getObjStr(obj, 'name'))
console.log(getObjStr(obj, 'prop'))
console.log(getObjStr(obj, 'propname'))
