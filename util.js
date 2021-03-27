module.exports = {
    demoMethod(text){
        return 'Hello'+' ' + text
        },
                }

const everyOfThem=(arr, num)=>{
    const res = arr.every(element=>{
        return element>num
    });
    return "every one is greater than "+ num +" : " + res; 
}

const someOfThem=(arr, num)=>{
    const res = arr.some(element=>{
        return element<num
    });
    return "some of them is less than "+ num +" : " + res; 
}

module.exports.everyOfThem = everyOfThem
module.exports.someOfThem = someOfThem