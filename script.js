window.onload = function() {
    const steps = document.getElementsByClassName('step');
     
    let counter = 0;

    const forwardButton = document.getElementById('forwardButton')
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
        steps[(counter-1)].style.top = 0;
        steps[(counter-1)].style.opacity = '1';
        if (counter <= 1) {
            backButton.style.display = 'none';
        }
        if (counter <= (steps.length)) {
            forwardButton.style.display = 'inline';
        }
    })

    

    
}