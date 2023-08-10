const AndroidVer = {
    name: 'Android ',
    version: '11',
    year: 2020,
    developer: 'Apple',
    type: 'Samsung'
};
console.log(isProperty(AndroidVer, 'developer'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}