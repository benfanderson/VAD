window.onload = function() {
    const steps = document.getElementsByClassName('step');
     
    let counter = 0;

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function(){
        startButton.style.top = -400;
        // startButton.style.opacity ='0';
        steps[counter].style.top = 0;
        steps[counter].style.opacity = '1';
        counter = counter + 1;
        forwardButton.style.display = 'inline';
        backButton.style.display = 'inline'

    });

    const forwardButton = document.getElementById('forwardButton')
    forwardButton.style.display ='none';
    forwardButton.addEventListener('click',function(){
        if (counter > 0){
            steps[(counter-1)].style.top = -400;
            steps[(counter-1)].style.opacity ='0';
        }   
        steps[counter].style.top = 0;
        steps[counter].style.opacity = '1';
        counter = counter + 1;
        if (counter > 0){
            backButton.style.display ='inline';
        } 
        if (counter > (steps.length-1)) {
            forwardButton.style.display = 'none';
        }
    })

    const backButton = document.getElementById('backButton');
    backButton.style.display ='none';
    backButton.addEventListener('click',function(){
        steps[(counter-1)].style.top = 200;
        steps[(counter-1)].style.opacity = '0';
        counter = counter - 1;
        if (counter > 0) {
            steps[(counter-1)].style.top = 0;
            steps[(counter-1)].style.opacity = '1';
        }
        if (counter == 0) {
            startButton.style.top = 0;
            startButton.style.opacity ='1';
            backButton.style.display = 'none';
            
        }
        if (counter <= (steps.length) && counter > 0) {
            forwardButton.style.display = 'inline';
        } else {
            forwardButton.style.display = 'none';
        }
    })

    

    
}