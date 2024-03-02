let list = ['elephant','dog','lion','python','rabbit','fish','monkey','tiger','bird']
let max_guesses = 6;
let letters_guessed = [];

//random-word
function random_word(){
    word = list[Math.floor(Math.random()*list.length)]
    alert(word);
    
}
random_word();


//display-word-section
function display_dashes_section(){
    let dashes = "";
    for(i=0; i<word.length; i++){
        dashes += "_";
    }
    let answer = document.querySelector("#answer-section");
    answer.textContent = dashes.split('').join(" ");
}

display_dashes_section();






