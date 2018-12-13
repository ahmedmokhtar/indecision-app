// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Mimo';
nameLet = 'Miso';
console.log('nameLet', nameLet);

const nameConst = 'Shoosh';
// nameConst = '7asaballah';  <= error
console.log('nameConst', nameConst);

const fullName = 'Ahmed Mokhtar';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);