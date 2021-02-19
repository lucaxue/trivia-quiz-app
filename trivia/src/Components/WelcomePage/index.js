import React, {useState} from 'react'; 

// state difficulty , genre, number of questions, player name

const[difficulty, setDifficulty]= useState("");

function handleDifficulty(innnerText){
    setDifficulty(innerText);
}

function WelcomeDisplay(){

return(
<div>
<button onClick={()=>handleDifficulty('easy')}>easy</button>
<button onClick={()=>handleDifficulty('medium')}>medium</button>
<button onClick={()=>handleDifficulty('hard')}>hard</button>

    </div>

)

};


export default WelcomeDisplay;
//functions handle