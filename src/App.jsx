import { useState } from 'react'; 

// import components
import Display from './components/Display'; 
import Form from './components/Form';

//import images
import logo from './assets/images/logo.svg'; 

function App() {
  const [billAmt, setBillAmt] = useState(false); 
  const [people, setPeople] = useState(0);
  const [isTipSelected, setIsTipSelected] = useState(0); 
  const [selectedTip, setSelectedTip] = useState(0);
  const [showBillAmtError, setShowBillAmtError] = useState(0); 


const handleBillAmtInput = (e) =>{
  const input = e.target.value; 
  const pattern = /^[0-9]*$/; 
   if(pattern.test(input)){
    setShowBillAmtError(false); 
   } else {
  setShowBillAmtError(true); 
}
}

const handleSelectedTip = (e) =>{
  console.log(e.target.value); 
}


  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter logo"/>
    <div className='container'>
      <div className='form'>


      </div>
      <Form 
        billAmt={billAmt}
        handleBillAmtInput = {handleBillAmtInput}
        setShowBillAmtError={setShowBillAmtError}
        handleSelectedTip = {handleSelectedTip}
      />
      <Display />
    
    </div>
    </div>
  )
}

export default App
