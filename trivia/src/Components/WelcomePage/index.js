
import React, {useState} from 'react'; 

// state difficulty , genre, number of questions, player name
// Display box for chosen Diff and Genre 


function WelcomeDisplay(){

    const[difficulty, setDifficulty]= useState("");
    const[genre, setGenre]= useState("");
    const[playerName, setPlayerName] = useState("bob");
    
    function handleDifficulty(diffText){
        setDifficulty(diffText);
        console.log(difficulty);
    }
    
    function handleGenre(genreText){
        setGenre(genreText);
        console.log(genre);
    }

    function handleSubmit(e){
        setPlayerName(e.target[0].value)
        console.log(e)
        e.preventDefault();
    }
    
return(
    <div>
<div className="difficulty_buttons">
<form onSubmit={handleSubmit}>
    <input  
    className="Player_Name" 
    placeholder="Enter Player Name Here..." 
    // onChange={(e)=>setPlayerName(e.target.value)}
    ></input>
    {/* <button type="submit" onClick={handleSubmit}></button> */}
</form>
<h1>Difficulty: {difficulty}</h1>
<h2>Genre Chosen: {genre}</h2>
<h2>Playen Name: {playerName}</h2>
<button onClick={()=>handleDifficulty('Easy')}>easy</button>
<button onClick={()=>handleDifficulty('Medium')}>medium</button>
<button onClick={()=>handleDifficulty('Hard')}>hard</button>
    </div>

<div className="genre_buttons">
<button onClick={()=>handleGenre('Art')}>Art</button>
<button onClick={()=>handleGenre('Politics')}>Politics</button>
<button onClick={()=>handleGenre('History')}>History</button>
    </div>



    </div>


)

};


export default WelcomeDisplay;
//functions handle

//props to take:
    //handle(functions)
    //difficulty/genre/name/ states

//returns
    //DifficultyButtons 
    //GenreButtons
    //input field

