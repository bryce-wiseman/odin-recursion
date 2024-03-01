let numFromInput = document.getElementById('fib-num')

let normalBtn = document.getElementById('normal-btn')
normalBtn.addEventListener('click', () => {
    fibNormal(numFromInput.value)
})
let recursBtn = document.getElementById('recursion-btn')
recursBtn.addEventListener('click', () => {
    fibRecursion(numFromInput.value)
})
let fibResult = document.getElementById('array-result')

let fibArray = [0, 1]

function fibNormal(x) {
    console.log(`normal function running`)
    if (x <= 1) {
        fibArray = [0]
        console.log(fibArray)
    } else if (x == 2) {
        fibArray = [0, 1]
        console.log(fibArray)
    } else {
        fibArray = [0, 1]
    for (let i = 2; i < x; i++) {
        fibArray[i] = fibArray[(i-2)] + fibArray[(i-1)]    
    }
    console.log(fibArray)
    let arrayString = fibArray.toString()
    fibResult.innerHTML = `${arrayString.replaceAll(',', ', ')}`
}
}

function fibRecursion(x) {
    console.log(`recursion function running`)
    if (fibArray[(x-1)] === undefined || fibArray[(x-2) === undefined]) {
        fibRecursion((x-1))
    } else {
        fibArray[x] = fibArray[(x-1)] + fibArray[(x-2)]
        
        if (x + 1 < numFromInput.value) {
            x++
            fibRecursion(x)
        } else {
            console.log(fibArray)
            let arrayString = fibArray.toString()
    fibResult.innerHTML = `${arrayString.replaceAll(',', ', ')}`
        }
    }
    
}