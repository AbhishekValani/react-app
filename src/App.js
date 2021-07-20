import './App.css';
import React , { useState } from 'react';

function App() {
  let my_Image = 'paper'
  let com_Image = 'paper'
  const [myImage,setImage] = useState(my_Image)
  const [comImage,setComImage] = useState(com_Image)
  const randomImageGenerator = () => {
    let result = 'rock'
    let rand = Math.round((Math.random()*10))%3;
    if(rand==0) result = 'paper';
    else if(rand==1) result= 'rock';
    else result = 'scissor';
    console.log('result',result)
    setComImage(result)
    
    console.log('xexe', comImage)
    updateScore(result)
    console.log('tete', myImage, comImage)
  }
  let my_Score = 0
  let com_Score = 0
  let result_Msg = '-------'
  const [myScore,setMyScore] = useState(my_Score)
  const [comScore,setComScore] = useState(com_Score)
  const [resultMsg,setResultMsg] = useState(result_Msg)
  const updateScore = (comImage) => {

    console.log('hehe', myImage , comImage)
    if(myImage == 'rock' && comImage == 'rock' || myImage == 'paper' && comImage == 'paper' || myImage == 'scissor' && comImage == 'scissor') {
      setResultMsg('DRAW !')
    } else if(myImage == 'rock' && comImage == 'paper' || myImage == 'paper' && comImage == 'scissor' || myImage == 'scissor' && comImage == 'rock') {
      setResultMsg('You Lose !')
      setComScore(comScore + 1)
    } else {
      setMyScore(myScore + 1)
      setResultMsg('You Win !')
    } 
  }
  const resetData = () => {
    setMyScore(0)
    setComScore(0)
    setResultMsg('-------')
  }
  return (
    <div className="outer_container">
      <h2 className="heading">Welcome to My Game</h2>
      <div className="inner_container">

        <div className="flex">
          <img src={`../rock.png`} className="p-20 image" onClick={()=> setImage('rock') } />
          <div className="score center">
            <div>SCORE</div>
            <div>{myScore} - {comScore}</div>
          </div>
        </div>

        <div className="flex p-t-20">
          <div className="center">
            <img src={`../paper.png`} className="p-20 image" onClick={()=> setImage('paper') }/>
          </div>
          <div className="center">
            <img src={'../arrow.svg'} className="arrow p-20"/>
          </div>
          <div className="center">
            {/* <span>You</span> */}
            <img src={`../${myImage}.png`} className="fixed-image"/>
          </div>
          <div className="center">
            <img src={'../challenge.png'} className="arrow p-20" onClick={randomImageGenerator}/>
          </div>
          <div className="center">
            {/* <span>Computer</span> */}
            <img src={`../${comImage}.png`} className="fixed-image"/>
          </div>
        </div>

        <div className="flex p-t-20">
          <img src={`../scissor.png`} className="image p-20" onClick={()=> setImage('scissor') }/>
          <div className="score center">{resultMsg}</div>
        </div> 

        <div className="flex flex-end">
          <button class="button" onClick={resetData}>Reset</button>
        </div>
      </div>  
    </div>
  );
}

export default App;
