const obj = {
    a: 'hello',
    b: 123,
};

function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}

printOwnProperties(obj)