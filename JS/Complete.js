// Here is the main js file for this project 

let Complete = document.getElementsByClassName('complete-btn');

// Digit Count document 
    let digitCount = document.getElementById('digit-count');
    let intDigitCount = parseInt(digitCount.innerText)
    console.log(intDigitCount);

    // Increase the assigned task documents 
    let increaseCount =  document.getElementById('increase-count');
    let intIncreaseCount = parseInt(increaseCount.innerText);
    console.log(intIncreaseCount);

for(let result of Complete){
    result.addEventListener('click', function() {
        console.log('btn are clicked');
        
        // Part of the decrement site 
        intDigitCount = intDigitCount - 1;
        console.log(intDigitCount);
        digitCount.innerText = intDigitCount;

        // part of Incremental site 
        intIncreaseCount = intIncreaseCount + 1;
        console.log(intIncreaseCount);
        increaseCount.innerText = intIncreaseCount ;

        result.disabled = true;
        
    })
}



