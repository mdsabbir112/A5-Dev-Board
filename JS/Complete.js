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

    // For count the iteration and alert the congratulations message 
    let count = 0;

// Loop for find Out the all button into this section .

for(let result of Complete){
    result.addEventListener('click', function() {

        alert('Board Updated Successfully')
        
        // Part of the decrement site 
        intDigitCount = intDigitCount - 1;
        digitCount.innerText = intDigitCount;

        // part of Incremental site 
        intIncreaseCount = intIncreaseCount + 1;
        increaseCount.innerText = intIncreaseCount ;

        // This is for Button Disable and make it blur after click the complete button
        result.disabled = true;
        result.style.opacity = '0.5';
        result.style.cursor = 'none';


        // Monitor the Activity log Here and show the transaction message 

        // Get the Time First 
        let now = new Date() ;
        let time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Extract all the title from the html Code
    let parentCard = result.closest('div .bg-sky-100')
    let getTitle = parentCard.querySelector('.title-details');
    let majorTitle = getTitle.innerText;

        // Main Logic Implemented there 

        let monitorDetails = document.getElementById('monitor-log');
        // console.log(monitorDetails);
        let enterElement = document.createElement('p');
        enterElement.classList.add('design-log');
        console.log(enterElement);
        enterElement.innerText = `You Have Completed the task ${majorTitle} issued at ${time} `
        monitorDetails.appendChild(enterElement);

        console.log(enterElement.innerText);



        // Delete the overall History
        let clearHistory = document.getElementById('clear-history');
            clearHistory.addEventListener('click', function() {
                monitorDetails.innerHTML = '' ;  // Delete the overall html on the current div of this id     
            })
        
        
    //    Print the Congratulations message which alert after the work
        count = count + 1 ;
        if(count == 6){
            alert('Congratulations ! You done it ')
        }
    })


}



