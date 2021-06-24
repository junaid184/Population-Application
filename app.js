// Q1
// var itemArray = [
//     {
//         name: "juice",price:50,quantity:3
//     },
//     {
//         name: "cookie",price:"30",quantity:"9"
//     },
//     {
//         name: "shirt",price:"880",quantity:"1"
//     },
//     {
//         name: "pen",price:"100",quantity:"2"
//     }
// ]
// // for juice
// var juicePrice = itemArray[0].price;
// var juiceQuantity = itemArray[0].quantity;
// var juiceTotal = juicePrice*juiceQuantity;
// //for cookie
// var cookiePrice = itemArray[1].price;
// var cookieQuantity = itemArray[1].quantity;
// var cookieTotal = juicePrice*juiceQuantity;
// // for shirt
// var shirtPrice = itemArray[2].price;
// var shirtQuantity = itemArray[2].quantity;
// var shirtTotal = juicePrice*juiceQuantity;
// // for pen
// var penPrice = itemArray[3].price;
// var penQuantity = itemArray[3].quantity;
// var penTotal = juicePrice*juiceQuantity;
// // grand total
// var gTotal = juiceTotal+cookieTotal+shirtTotal+penTotal;

//Q2
// var object = {
//     name:"Junaid Shakeel Ahmed",
//     email:"junaidshakil116@gmail.com",
//     password:"**********",
//     age:"20",
//     gender:"Male",
//     city:"Karachi",
//     country:"Pakistan",
// }
// // to check property is in object or not.
// console.log("age" in object);
// console.log("country" in object);
// console.log("firstName" in object);
// console.log("lastName" in object);

//Q3
// function Record(name, age, city, country){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
// }
// var record1 = new Record('junaid','20','Karachi','Pakistan');
// var record2 = new Record('faaiz','22','Karachi','Pakistan');
// var record3 = new Record('mohib','24','Karachi','Pakistan');

//Q4
window.onload = function(){
    var Name = document.getElementById('name');
var Address = document.getElementById('address');
var Profession = document.getElementById('prof');
var Education = document.getElementById('edu');
var myform = document.getElementById('myform');
var display = document.getElementById('display');
var cardBody = document.getElementsByClassName('card-body')[0]

myform.addEventListener('submit', function(e) {
    e.preventDefault();

    nameTxtValue = document.getElementById('name').value
    addressTxtValue = document.getElementById('address').value
    professionTxtValue = document.getElementById('prof').value
    educationTxtValue = document.getElementById('edu').value


    if (nameTxtValue == '' || addressTxtValue == '' || professionTxtValue == 'Select your profession' || educationTxtValue == 'select your education') {
        UI.messages('Insert All Text Fields', 'danger');
        return
    } else {
        var data = new Data(nameTxtValue, addressTxtValue, professionTxtValue, educationTxtValue);
        UI.clearFields();
        UI.displayData(data)
        Store.setStored(data)
        UI.messages('Data Inserted', 'success')
    }

})

// display.addEventListener('click', function(e) {
//     if (e.target.classList.contains('RemoveIt')) {
//         // UI.removeRow(e.target)
//     }

// })
class Data {
    constructor(nameTxtValue, addressTxtValue, professionTxtValue, educationTxtValue) {
        this.name = nameTxtValue;
        this.address = addressTxtValue;
        this.profession = professionTxtValue;
        this.education = educationTxtValue;
    }
}

class UI {
    static clearFields() {
        document.getElementById('name').value = ''
        document.getElementById('address').value = ''
        document.getElementById('prof').value = ''
        document.getElementById('edu').value = ''
    }

    static displayData(obj) {
        let DataFromLocalStorage = Store.getStored()
        DataFromLocalStorage.push(obj)
        UI.populateTR(DataFromLocalStorage)

    }

    static populateTR(DookFromLocalStorage) {
        DookFromLocalStorage.forEach(function(onebyone) {
            display.innerHTML += ` <tr>
            <td>${onebyone.name}</td>
            <td>${onebyone.address} </td>
            <td>${onebyone.profession}</td>
            <td>${onebyone.education}</td>
        </tr>`

        })
    }

    static messages(txt, className) {
        let divs = '';
        divs = document.createElement('div')
        divs.classList = `alert alert-${className}`
        divs.innerText = txt;
        cardBody.insertBefore(divs, myform)
        setTimeout(function() {
            divs.remove()
        }, 2000)
    }
    // static removeRow(element) {

    //     sn = element.parentElement.parentElement.innerText

    //     element.parentElement.parentElement.remove()
    //     Store.removeStored(sn)
    // }

}
class Store {

    static getStored() {
        let data = ''
        if (localStorage.getItem('data') == null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem('data'))
            var h2 = document.getElementById('total');
            h2.innerText = "Total Number Of Peoples: "+data.length;
        }
        return data
    }

    static setStored(x) {

        let data = Store.getStored()
        data.push(x)
        localStorage.setItem('data', JSON.stringify(data))
    }

    // static removeStored(isbn) {
    //     let Allvalues = Store.getStored()
    //     Allvalues.forEach((onebyone, index) => {
    //         if (onebyone.name == isbn) {
    //             Allvalues.splice(index, 1);
    //         }
    //     })

    //     localStorage.setItem('data', JSON.stringify(Allvalues))
    // }
}
    UI.populateTR(Store.getStored())
}