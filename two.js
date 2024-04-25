const propertyName = 'keyOne';

const obj = {
    keyOne: 'hello',
    keyTwo: 123,
};

function hasProperty(propertyName, obj) {
    console.log(propertyName in obj); 
}

hasProperty(propertyName, obj)