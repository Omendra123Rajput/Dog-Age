// console.log(earlyYears)
// console.log(laterYears)

document.querySelector('#button').addEventListener('click',calculateAge)

function calculateAge(){

    // let myAge = Number(document.querySelector('#humanAge').value)
    let myAge = document.querySelector('#humanAge').value
    // this is a age variable
    // alert( myAge)
    if (/\D/.test(myAge)){
        alert(`YO! Are you stupid? Please enter age in numbers`)
    }
    else{

        var newAge = Number(myAge)
        let earlyYears = 2

        // early age years of the dog
    
        earlyYears *= 10.5
    
        let laterYears = newAge - 2
    
        laterYears *= 4
        let myAgeInDogYears = earlyYears + laterYears
    
        let myName = (document.querySelector('#humanName').value).toLowerCase()
        document.querySelector('.resultHere').classList.toggle('hidden')
        document.querySelector('#resultGoesHere').innerHTML = `My name is ${myName}. I am ${newAge} years old in human years which is ${myAgeInDogYears} old in Dog years. `



    }



}




// **********
