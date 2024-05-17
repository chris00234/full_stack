function generatePassword(length, includeLowercase, includeUppercase, includeSymbols){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=";

    let allowed = '';
    let password = '';

    allowed += (includeLowercase) ? lower : '';
    allowed += (includeUppercase) ? upper : '';
    allowed += (includeNumbers) ? numbers : '';
    allowed += (includeSymbols) ? symbols : '';
    
    if (length <= 0) return 'Password length must be greater than 0';
    if (allowed.length <= 0) return 'Must include at least one of the following: lowercase, uppercase, numbers, symbols';
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * allowed.length);
        password += allowed[random];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeSymbols);

console.log('Generated Password: ', password);

const students = [1,2,3,4,5,6,7,8,9,10];

function double(element){
    return element * 2;
}

const doubleStudents = students.map(double);


