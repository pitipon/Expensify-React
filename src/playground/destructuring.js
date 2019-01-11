
// 
// Array destructuring
// 

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// old way
console.log(`You are in ${address[1]} ${address[2]}`)

// Array destructuring
const [ , city, state, zip, planet = 'Earth'] = address;
console.log(`You are in ${city} x ${planet}`)






















