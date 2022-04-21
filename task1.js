const obj = {
    'id': 1,
    'name': "name",
    'prop': 'property'
}
function getObjKeysVals(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key — ${key}, value — ${obj[key]}`)
        }
    }
}
getObjKeysVals(obj)
