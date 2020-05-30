import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Game, Nav } from "../../common/styles";
import { GameContainer, WinContainer } from "./styles";
// import DraggableList from "./components/DraggableList";
import { useImagesContext } from "../../contexts/ImagesContext";
import winnerSound from './sound/winner.mp3';
import looserSound from './sound/looser.mp3';

export default () => {
  const { images } = useImagesContext();
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [onTable, setonTable] = useState([]);

  useEffect(() => {
    disablePageScroll();
    return ()=> {
      enablePageScroll();
    }
  }, []);

  useEffect(() => {
    let question = parseInt(Math.random()*20)*5;
    setQuestion(question);
  },[]);

  const winnerRef = React.useRef();
  const looserRef = React.useRef();

  const add = event => {
    const image = event.target.closest("img");
    let imageValue = parseInt(image.getAttribute('value'));
    setAnswer(imageValue + answer);
    setonTable([...onTable, image.getAttribute('alt')]);
    if(imageValue + answer > question){
        looserRef.current.play();
    }
    else if(imageValue + answer === question){
        winnerRef.current.play();
    }

  };

  const remove = event=> {
    const image = event.target.closest("img");
    let imageValue = parseInt(image.getAttribute('value'));
    setAnswer(answer - imageValue);
    const index = onTable.indexOf(image.getAttribute('alt'))
    if (index > -1) { onTable.splice(index, 1) }
    setonTable([...onTable]);
  }

  const reset = event=> {
    let question = parseInt(Math.random()*20)*5;
    setQuestion(question)
    setAnswer(0);
    setonTable([]);
  }

  return (
    <Game bg={images["bg.png"]} size="400px" filter="1" style={{paddingRight: '10%'}}>
      <Nav type="back" to="/puzzle" />
      <GameContainer>
          <div className="options">
            <img src={images["5.jpg"]} value="5" alt="5.jpg" onClick={add}/>
            <img src={images["10.jpg"]} value="10" alt="10.jpg" onClick={add}/>
            <img src={images["20.jpg"]} value="20" alt="20.jpg" onClick={add}/>
            <img src={images["50.jpg"]} value="50" alt="50.jpg" onClick={add}/>
          </div>
          <p>Please give me Rs {question}</p>
          <div className="table"> {onTable.map((item,i)=>(<img key={i} onClick={remove} src={images[item]} alt={item} value={item.split()[0]}/>))}</div>
          <p>The total value is {answer}</p>
          {question === answer? (<WinContainer>
                <img src={images["winner.webp"]} alt="reset" onClick={reset}/>
            </WinContainer>)
          : null}
      </GameContainer>
      <audio ref={winnerRef} src={winnerSound} preload="auto" controls="none" style={{display: "none"}}></audio>
      <audio ref={looserRef} src={looserSound} preload="auto" controls="none" style={{display: "none"}}></audio>
    </Game>
  );
};
