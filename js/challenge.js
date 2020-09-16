
let countup = setInterval(myTimer, 1000);
const counter = document.querySelector('#counter')


function myTimer(){
    
    let seconds = parseInt(counter.innerText)
    seconds++
    counter.innerText = seconds
}



    // const body = document.getElementsByTagName('body')
    document.body.addEventListener('click', function(e) {
        
        if(e.target.id === 'minus'){
            let seconds = parseInt(counter.innerText)
            seconds--
            counter.innerText = seconds
        } else if(e.target.id === 'plus'){
            let seconds = parseInt(counter.innerText)
            seconds++
            counter.innerText = seconds
        } else if(e.target.id === 'heart'){
            const ul = document.querySelector('.likes')
            if(document.getElementById(`${counter.innerText}`)){
                const splitText = document.getElementById(`${counter.innerText}`).innerText.split(" ")
                let numLikes = parseInt(splitText[2])
                numLikes++
                document.getElementById(`${counter.innerText}`).innerText = `${counter.innerText} has ${numLikes} likes`
            } else {
                let likes = 1
                const li = document.createElement('li')
                li.setAttribute("id", `${counter.innerText}`)
                li.innerText = `${counter.innerText} has ${likes} likes`
                ul.append(li)
            }
        } else if(e.target.id === 'pause'){
                if(e.target.innerText === 'pause'){
                    e.target.innerText = 'resume'
                    clearInterval(countup)
                    // countup;
                } else if (e.target.innerText === 'resume'){
                    e.target.innerText = 'pause'  
                    countup = setInterval(myTimer, 1000)
                }
              
            // As a user, I can pause the counter, which should 

            // * pause the counter
            // * disable all buttons except the pause button
            // * the pause button should then show the text "resume."
          
            // When 'resume' is clicked, it should restart the counter and re-enable the buttons.
        }
    
    //if minus plus heart pause
    //ul with class likes
})