const username = Symbol('username');
const password = Symbol('password');

const user = {[username]: 'tribadelic', [password]: 'pass123', age: 27}

console.log(user.username)
console.log(user.password)
console.log(user.age)
