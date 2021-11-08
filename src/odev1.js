//Question 1

function findPrime(...numbers) {
    let prime = true
    for (let i = 0; i < numbers.length; i++) {

        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] == 1) {
                prime = false
            }
            else if (numbers[i] == 2) {
                prime = true

            }
            else if (numbers[i] % j == 0) {
                prime = false
            }
        }
        if (prime == true) {
            console.log(numbers[i])
        }
    }

}
    
findPrime(3,5,11,144)

// Question 2

function friendNumbers(num1,num2) {
    let sumNum1=0, sumNum2=0

    for (let i = 1; i < num1; i++) {
        if(num1%i==0)
            sumNum1+=i        
    }
    for (let i = 1; i < num2; i++) {
        if (num2%i==0) {
            sumNum2+=i
        }
    }
    if (sumNum1==num2||sumNum2==num1) {
        console.log(num1 +" "+ num2 +" Arkadas sayi")
    }
    else
    console.log(num1 +" "+ num2+ " Arkadas sayi degil")
}

friendNumbers(220, 284)
friendNumbers(2,3)

// Question 3
function mukemmelSayi() {
    let sum=0
    let number=1000

    for (let i = 1; i <number; i++) {
        for (let j = 1; j < i; j++) {
            if (i%j==0) {
                sum+=j
                //console.log(sum)
            }
        }
        if (i==sum) {
            console.log(i+ " Mukemmel sayi")
        }
       
        sum=0
    }
    
}

mukemmelSayi()

// Question 4

function findPrimeNumbers(number) {
    
    let prime= true

    for (let i = 1; i < number; i++) {
        for (let j = 2; j < i; j++) {
            if (i%j==0) {
                prime=false
                break
            }
            else
                prime= true
            
        }
        if (prime==true) {
            console.log(i + " Asal sayi")
        }
        
    }
}

findPrimeNumbers(1000)