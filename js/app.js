// console.log(1)
// Scrivi un programma che stampi in console i numeri da 1 a 100,
for (let i = 0; i < 100; i++) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
    if (((i + 1) % 15) === 0) {
        console.log('FizzBuzz')
    } else {
        // ma che per i multipli di 3 stampi “Fizz” al posto del numero

        if (((i + 1) % 3) === 0) {
            console.log('Fizz')
        } else {
            // e per i multipli di 5 stampi “Buzz”.
            if (((i + 1) % 5) === 0) {
                console.log('Buzz')
            } else {
                console.log(i+1)
            }
        }
    }
}
// BONUS
const grigliaElement = document.querySelector('.griglia')
console.log(grigliaElement)
for (let i = 0; i < 100; i++){
    
    if (((i + 1) % 15) === 0) {
        grigliaElement.innerHTML += `<div>FizzBuzz</div>`
    } else {
        // ma che per i multipli di 3 stampi “Fizz” al posto del numero

        if (((i + 1) % 3) === 0) {
            grigliaElement.innerHTML += `<div>Fizz</div>`
        } else {
            // e per i multipli di 5 stampi “Buzz”.
            if (((i + 1) % 5) === 0) {
                grigliaElement.innerHTML += `<div>Buzz</div>`
            } else {
                grigliaElement.innerHTML += `<div>${i+1}</div>`
            }
        }
    }
}
