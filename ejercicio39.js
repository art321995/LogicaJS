// Comprobar un email

function Email(email){

    let testEmail = /^\w+@\w+\.\w+$/gi.test(email);

    return testEmail;
};

console.log(Email("art2701@gmail.com"));