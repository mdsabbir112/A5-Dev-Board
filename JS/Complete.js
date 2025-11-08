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

    let titles = document.getElementsByClassName('title-details');
    let majorTitle = '';

for(let result of Complete){
    result.addEventListener('click', function() {

        alert('Board Updated Successfully')
        
        // Part of the decrement site 
        intDigitCount = intDigitCount - 1;
        digitCount.innerText = intDigitCount;

        // part of Incremental site 
        intIncreaseCount = intIncreaseCount + 1;
        increaseCount.innerText = intIncreaseCount ;

        // This is for Button Disable
        result.disabled = true;


        // Monitor the Activity log Here and show the transaction message 

                // Get the Time First 
        let now = new Date() ;
        let time = now.toLocaleTimeString();

        // Extract all the title from the html Code 


        
        for(let title of titles ){
                // console.log(title);
                majorTitle = title.innerText ;
               let index =  majorTitle.indexOf(title);
               console.log(index);
                // console.log(majorTitle);
                // break;
        }

        // Main Logic Implemented there 

        let monitorDetails = document.getElementById('monitor-log');
        // console.log(monitorDetails);
        let enterElement = document.createElement('p');
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



