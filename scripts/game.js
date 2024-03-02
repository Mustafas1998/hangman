let list = ['elephant','dog','lion','python','rabbit','fish','monkey','tiger','bird']
let max_guesses = 6;
let letters_guessed = [];

//random-word
function random_word()
{
    word = list[Math.floor(Math.random()*list.length)]
    alert(word);

}

random_word();

function hang_update()
{


}

//display-word-section
function display_dashes_section()
{
    let dashes = "";
    for(i=0; i<word.length; i++){
        dashes += "_";
    }
    let answer = document.querySelector("#answer-section");
    answer.innerHTML = dashes.split('').join(" ");
}

display_dashes_section();


//event-listner for  letters

let letter_clicks = document.querySelectorAll(".letter");
for(let i in letter_clicks)
{   let letter = letter_clicks[i];
    letter.addEventListener("click", function()
    {
        // if(s)
        // {
        alert('click')
        // } else if(max_guesses<=0){
        //     alert(`GAMEOVER.Word is ${word}`)
        //     alert("clicks=0")
        // }
            
    });
};


   

    
 





//check letter
// function check_letter(letter_answer)
// {

// }






