
// Change the background color of the body to a random color 
let bgColor = document.getElementById('random-bg')
    bgColor.addEventListener('click', function() {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    })
