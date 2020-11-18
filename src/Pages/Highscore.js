import React from 'react'
import NavBar from "./NavBar";




const Highscore =()=>{

return (
<div>
  <div className="mainContainer">
  <NavBar />
  <div className="header" style={{color:"white"}}>
    <h1>Highscore</h1>
    <h2>Top-Ranked</h2>
    <h4>from highest to lowest</h4>
    </div>
    <div className="uldiv">
    <ul className="list" style={{listStyleType:"none"}}>
      <li><div className="innerdiv"><div>1</div><div>Chicken - The Chicken</div> <div className="points">1000</div></div></li>
      <li><div className="innerdiv"><div>2</div><div>Ben - The Pre Data </div> <div className="points">1000</div></div></li>
      <li><div className="innerdiv"><div>3</div><div>Alejandra - Chilli Milli</div> <div className="points">1000</div></div></li>
      <li><div className="innerdiv"><div>4</div><div>Kene - Black and Killerful</div> <div className="points">1000</div></div></li>
      <li><div className="innerdiv"><div>5</div><div>Marcus - I hate Pokemons, so I kill them</div> <div className="points">1000</div></div></li>
      <li><div className="innerdiv"><div>6</div><div>Teresa - The Korean Blizzard - Be Water my friend</div> <div className="points">1000</div></div></li>
     
    </ul>
    </div>
  </div>
</div>)

}





{/*const Highscore = () => {
    var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length)).toUpperCase();

    
    return (
        <div>
           {text}
        </div>
    )
}*/}

export default Highscore

