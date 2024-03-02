
let list = ['ELEPHANT','DOG','LION','PYTHON','RABBIT','FISH','MONKEY','TIGER','BIRD'];
let max_guesses = 6;
let letters_guessed = [];

//random-word
function random_word()
{
    word = list[Math.floor(Math.random()*list.length)]
    alert(word);
}
random_word();


//display-word-section
function display_dashes_section()
{
    let dashes = "";
    for(i=0; i<word.length; i++){
        dashes += "_";
    }
    let answer = document.querySelector("#answer-section");
    answer.innerHTML = dashes.split('').join(' ');
    
}

// checking the letter section
function checker(choice)
{
    if (word.includes(choice) && choice===word[id])
    {
        dashes[i*2] = choice
        
    }else
    {    
    max_guesses--;
    hang_update();        
    }
    display_dashes_section();
}



//event-listner for  letters
let letter_clicks = document.querySelectorAll(".letter");
for(let l of letter_clicks){

    l.addEventListener("click", function()
    { 
        if(max_guesses > 0)
        {
            letters_guessed.push(l.innerHTML)
            checker(l.innerHTML)
            alert("This letter is in this word!")
            
        } else {
            alert(`GAMEOVER.Word is ${word}`)
            alert("clicks=0")
        }  
    });
};

display_dashes_section();
