import React from 'react';
import logo from './logo.svg';
import soundObject from './sound';
import './App.css';
import { returnStatement, thisExpression } from '@babel/types';

function App() {
  window.addEventListener('keydown',function(e){
    document.querySelectorAll('.key').forEach((item)=>{
      item.classList.remove('glow');
    });
    var key =  document.querySelector(`div[data-key='${e.keyCode}'`);  
    var sound = document.querySelector(`audio[data-key='${e.keyCode}'`);
    if(!key && !sound){
      return;
    }
   
    key.classList.add('glow');
    sound.currentTime=0;
    sound.play().then(function(){}).catch(function(err){});
    
  });

  function handleClick(val){
  
   var sound = document.querySelector(`audio[data-key='${val}'`);
    sound.currentTime=0;
    sound.play().then(function(){}).catch(function(err){});
  
  }
  return (
    <div className="App">
     <div className="key" data-key="65" onClick= {handleClick.bind(this,65)}>  
       A
       <span className="subtext">clap</span>
     </div>
     <div className="key" data-key="83" onClick= {handleClick.bind(this,83)}>
       S
       <span className="subtext">hithat</span>
     </div>
     <div className="key" data-key="68" onClick= {handleClick.bind(this,68)}>
       D
       <span className="subtext">kick</span>
     </div>
     <div className="key" data-key="70" onClick= {handleClick.bind(this,70)}>
       F
       <span className="subtext">openhat</span>
     </div>
     <div className="key" data-key="71" onClick= {handleClick.bind(this,71)}>
       G
       <span className="subtext">boom</span>
     </div>
     <div className="key" data-key="72" onClick= {handleClick.bind(this,72)}>
       H
       <span className="subtext">ride</span>
     </div>
     <div className="key" data-key="74" onClick= {handleClick.bind(this,74)}>
       J
       <span className="subtext">snare</span>
     </div>
     <div className="key" data-key="75" onClick= {handleClick.bind(this,75)}>
       K
       <span className="subtext">tom</span>
     </div>
     <div className="key" data-key="76" onClick= {handleClick.bind(this,76)}>
       L
       <span className="subtext">tink</span>
     </div>
    

     <audio data-key="65" src={soundObject.clap}/>
     <audio data-key="83" src={soundObject.hihat}/>
     <audio data-key="68" src={soundObject.kick}/>
     <audio data-key="70" src={soundObject.openhat}/>
     <audio data-key="71" src={soundObject.boom}/>
     <audio data-key="72" src={soundObject.ride}/>
     <audio data-key="74" src={soundObject.snare}/>
     <audio data-key="75" src={soundObject.tom}/>
     <audio data-key="76" src={soundObject.tink}/>
    </div>
  );
}

export default App;
