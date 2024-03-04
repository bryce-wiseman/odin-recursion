// FIBONACCI FUNCTIONS

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

// MERGE SORT FUNCTION

let mergeInput1 = document.getElementById('merge-input1')
let mergeInput2 = document.getElementById('merge-input2')
let mergeInput3 = document.getElementById('merge-input3')
let mergeInput4 = document.getElementById('merge-input4')
let mergeInput5 = document.getElementById('merge-input5')
let mergeInput6 = document.getElementById('merge-input6')
let mergeInput7 = document.getElementById('merge-input7')
let mergeInput8 = document.getElementById('merge-input8')

let mergeBtn = document.getElementById('merge-btn')
let mergeResult = document.getElementById('merge-result')

mergeBtn.addEventListener('click', () => {
    prepareArray(mergeInput1.value, mergeInput2.value, mergeInput3.value, mergeInput4.value, mergeInput5.value, mergeInput6.value, mergeInput7.value, mergeInput8.value)
})

function prepareArray(a, b, c, d, e, f, g, h) {
        let arrayToSort = [a, b, c, d, e, f, g, h]
        let filteredArray = arrayToSort.filter((val) => val != '' )
        console.log(filteredArray)
        let numberedArr = filteredArray.map(Number)
        console.log(numberedArr)
        mergeSort(numberedArr)
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let middle = Math.floor(arr.length / 2)
        let leftArr = arr.slice(0, middle)
        let rightArr = arr.slice(middle)
        return merge(mergeSort(leftArr), mergeSort(rightArr))
    }
}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    let finalArr = [...sortedArr, ...leftArr, ...rightArr]
        console.log(finalArr)
        let mergeString = finalArr.toString()
        mergeResult.innerHTML = `${mergeString.replaceAll(',', ', ')}`
        return finalArr
}
