const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password');
const password2 = document.getElementById('password2')
username.value = "Gopi";

function showError(input, message) {
    const formField = input.parentElement;
    formField.className = 'form-fields error'
    const small = formField.querySelector('small')
    small.innerText = message;
}

function showSuccess(input) {
    const formField = input.parentElement;
    formField.className = 'form-fields success'
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'email is not valid')
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'passwords do not match')
    }
};

function checkRequired(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    }
    )
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function createObject(inputArray) {

    var object = {
        username: `${inputArray[0].value}`,
        email: `${inputArray[1].value}`,
        password: `${inputArray[2].value}`
    }
    console.log(object);
    return object;

}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 25)
    checkLength(password, 8, 30)
    checkEmail(email);
    checkPasswordsMatch(password, password2);
    createObject([username, email, password])
})



// function createObject(inputArr, usermin, usermax, passmin, passmax) {
//     valueArray = [];
//     inputArr.forEach(function (input) {
//         valueArray.push(input)
//         console.log(valueArray)
//         if (input[0].value.length > `${usermin}` && input[0].value.length < `${usermax}`) {
//             const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (re.test(input[1].value)) {
//                 if (input[2].value.length > `${passmin}` && input[2].value.length < `${passmax}`) {
//                     if (input[2].value === input[3].value) {
//                         valueArray.push(input.value)

//                     }
//                 }
//             }
//         }
//     })
// }

// object = {
//     username: 'gopi',
//     email: email,
//     password: password,
// }
// console.log(object)









//have gopi as name in username
//correct the ui
//create an object in console