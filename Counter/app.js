(function (){

    const buttons = document.querySelectorAll('.btn')

    let count = 0

    buttons.forEach( function(button) {
        button.addEventListener('click', function (){
            if(button.classList.contains('inc'))
           { count++}
            
            else if(button.classList.contains('dec'))
            {count--}


            const counter = document.querySelector('.counter')
            counter.textContent = count

            if(count>0){
                counter.style.color = 'green'
            }

            else if(count<0){
                counter.style.color = 'red'
            }

            else{
                counter.style.color = 'black'

            }
        })
        
    })
})()
