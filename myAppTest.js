console.log('console.log myAppTest.js');

// ES6 feature (arrow function)
let checkID = (id) => {
    if ( id !== '123456') {
        console.log('Incorrect ID: ' + id);
    } else {
        console.log('Correct ID: ' + id);
    }
}

checkID('123456--55555777');

document.write('document.write myAppTest');
