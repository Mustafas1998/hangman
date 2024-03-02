
let list = ['ELEPHANT','DOG','LION','PYTHON','RABBIT','FISH','MONKEY','TIGER','BIRD'];
let max_guesses = 6;
let letters_guessed = [];

//random-word-section
function random_word()
{
    word = list[Math.floor(Math.random()*list.length)]
    alert(word);
}
random_word();


//display-dashes-section
function display_dashes_section()
{
    let dashes = "";
    for(i=0; i<word.length; i++){
        dashes += "_";
    }
    let answer = document.querySelector("#answer-section");
    answer.innerHTML = dashes.split('').join(' ');
    
}

// checking_the_letter_section
function checker(choice)
{
    if (word.includes(choice))
    {
        choice.replace(letters_guessed)
        
    }else
    {    
    max_guesses--;
    hang_update();        
    }
    display_dashes_section();
}



//event_listner_for_letters
let letter_clicks = document.querySelectorAll(".letter");
for(let l of letter_clicks){

    l.addEventListener("click", function()
    { 
        if(max_guesses > 0)
        {
            letters_guessed.push(l.innerHTML)
            checker(l.innerHTML)
            
            
        } else {
            alert(`GAMEOVER.Word is ${word}`)
            
        }  
    });
};

display_dashes_section();

//hangman_update
function hang_update(){
    if(max_guesses===5){
        head()
    }
    if(max_guesses===4){
        body()
    }
    if(max_guesses===3){
        leftHand()
    }
    if(max_guesses===2){
        rightHand()
    }
    if(max_guesses===1){
        leftLeg()
    }
    if(max_guesses===0){
        rightLeg()
    }
}
