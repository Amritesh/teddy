import React, {Component, useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Game, Nav } from "../../common/styles";
import { GameContainer, WinContainer } from "./styles";
// import DraggableList from "./components/DraggableList";
import { useImagesContext } from "../../contexts/ImagesContext";
import winnerSound from '../../sound/winner.mp3';
import looserSound from '../../sound/looser.mp3';

export default () => {
  const { images } = useImagesContext();
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(5);
  const [onTable, setonTable] = useState([]);

  useEffect(() => {
    disablePageScroll();
    return ()=> {
      enablePageScroll();
    }
  }, []);

  useEffect(() => {
    reset();
  },[]);

  const winnerRef = React.useRef();
  const looserRef = React.useRef();
  const nameRef = React.useRef();
  const placeRef = React.useRef();
  const animalRef = React.useRef();
  const thingRef = React.useRef();

  const add = event => {

  };

  const evaluate = (time)=> {
    
    if(time>=0){
        console.log(nameRef.current.innerText)
        // if(score < 7){
        //     looserRef.current.play();
        // }
        // else{
        //     winnerRef.current.play();
        //     setTimeout(reset, 3000);
        // }
    } else{
        reset();
    }
  }

  const reset = ()=> {
    let question = parseInt(Math.random()*26);
    question = String.fromCharCode(65+question);
    setQuestion(question);
    setTotal(5);
  }

  return (
    <Game bg={images["bg.png"]} size="400px" filter="1" style={{paddingRight: '10%'}}>
      <Nav type="back" to="/puzzle" />
      <GameContainer>
          <p>Your next lucky letter is {question}</p>
          <Timer startCount={total} evaluate={evaluate}></Timer>
          <div style={{display:'inline-flex'}}><p style={{fontSize:'xx-large'}}>Name : </p><input ></input></div>
          <div style={{display:'inline-flex'}}><p style={{fontSize:'xx-large'}}>Place : </p><input></input></div>
          <div style={{display:'inline-flex'}}><p style={{fontSize:'xx-large'}}>Animal : </p><input></input></div>
          <div style={{display:'inline-flex'}}><p style={{fontSize:'xx-large'}}>Thing : </p><input></input></div>
          <p>You got {score} points</p>
          <button id="nextGame" onClick={reset}></button>
      </GameContainer>
      <audio ref={winnerRef} src={winnerSound} preload="auto" controls="none" style={{display: "none"}}></audio>
      <audio ref={looserRef} src={looserSound} preload="auto" controls="none" style={{display: "none"}}></audio>
    </Game>
  );
};

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        const {startCount} = this.props;
        this.setState({
            count: startCount
        })
        this.doIntervalChange()
    }

    doIntervalChange = ()=>{
        const {evaluate} = this.props;
        const {count} = this.state;
        this.myInterval = setInterval(()=>{
            evaluate(count);
            this.setState( prevState => ({
                count: prevState.count  - 1 
            }))
        }, 1000)
    }
    render() {
        const {count} = this.state;
        return (
        <div>
            <h1>Time Left: {count}</h1>
        </div>)
    }
}
