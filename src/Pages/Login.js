import React, { useState, useRef } from "react";
import login from "../assets/login.png";
import Confetti from "react-confetti";
import Pika2 from '../assets/Pika2.png'

const Login = () => {
  const [click, setClick] = useState(null);
  const [input, setInput] = useState(null);
  const [log, setLog] = useState(null);
  const [img, setImg] = useState([]);
  console.log(img);
  console.log(click);
  console.log(input);
  const loginButton = useRef(null);
  const say = useRef(null);
  const image = useRef(null);
  const muscle = useRef(null);
  const confetti = useRef(null);
  const access = useRef(null);

  const newDiv = React.createElement('div')

  let win = [
    "Autsch...<br/> ok you are worthy...<br/> you are good to go",
    "Autsch...<br/> ok you won...<br/> a...Box again",
  ];
  let images = [
    login,
    <img src="https://media1.tenor.com/images/ecea5f927c0a121083b22a14e583814d/tenor.gif?itemid=15308559" />,
  ];
  let clicks = 0;

  const muscleClick = () => {
    handleClick();
  };

  const accessClick = () => {
handleClick()
  }

  const winClick = () => {
    confetti.current.style.visibility = "visible";
  };

  const handleClick = () => {
    clicks += 1;
    if (clicks === 1) {
      say.current.style.visibility = "visible";
      image.current.style.visibility = "hidden";
      muscle.current.style.visibility = "visible";
      say.current.innerHTML =
        "are you talking to me...<br/> you <br/> weakling...";
    } else if (clicks === 2) {
      say.current.innerHTML = "you hit <br/> like a litte chicken...";
    } else if (clicks === 3) {
      say.current.innerHTML = "give me <br/> more...";
    } else if (clicks === 4) {
      say.current.innerHTML = win[Math.floor(Math.random() * win.length)];
      muscle.current.style.visibility = "hidden";
      access.current.style.visibility = 'visible';
      loginButton.current.style.visibility = "visible";
    }  
    
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setLog(input);
    if (!input) {
      alert("enter Username and Password");
    }
  };

  return (
    <div className="container">
      <Confetti ref={confetti} className="confetti" />
      <div className="firstImage">
        <p onClick={winClick} style={{ opacity: "0" }}>Hallo
        </p>
      </div>
      <div className="form1">
        <form>
          <label>
            Login:
            <br />
            <input
              type="text"
              name="name"
              value={input}
              placeholder="User name"
              onChange={handleOnChange}
            />
          </label>
          <br />
          <input type="text" name="name" placeholder="Password" />
          <br />
          <br />
          <div className="speech-bubble" ref={say}></div>
          <div className="login">
          <img ref={access} className ="access" onClick = {accessClick} src={Pika2} style ={{width: '60%'}}/>
            <img
              className="muscle"
              ref={muscle}
              onClick={muscleClick}
              src="https://media1.tenor.com/images/ecea5f927c0a121083b22a14e583814d/tenor.gif?itemid=15308559"
              style={{ width: "60%" }}
            />
            <img
              className="image"
              ref={image}
              onClick={handleClick}
              src={login}
              style={{ width: "60%" }}
            />
          </div>
          <button
            onClick={handleButtonClick}
            ref={loginButton}
            style={{
              visibility: "hidden",
              width: "40%",
              boxShadow: "2px 2px black",
              backgroundColor: "yellow",
              marginTop: "100px",
              marginRight: "40px",
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
