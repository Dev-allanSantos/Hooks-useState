import React, {useState} from 'react';
import './App.css';
import EffectExample from './EffectExample';



function App() {
  const [visable, setVisable] = useState(true);

  setTimeout(() => {
    setVisable(false);
  }, 5000)
 
  return visable && <EffectExample/>;
  
}

export default App;
