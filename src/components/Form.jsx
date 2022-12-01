import React from 'react'; 
import dollar from  "../assets/images/icon-dollar.svg"
import person from  "../assets/images/icon-person.svg"


const Form = ({ handleBillAmtInput, billAmt,setShowBillAmtError, handleSelectedTip}) => {
  return (
    <>
    <div className='form'>
        <div className='label-group'>
            <div className='label-wrapper'>
            <label className='label' htmlFor='bill'>Bill</label>
            <p className='error'>{setShowBillAmtError? "Please enter numbers only":""}</p>
            </div>
            <div className='number-wrapper'>
            <input type='text' id="bill" className='number-input'
              onInput={handleBillAmtInput} value={billAmt} 
            />
            <img src={dollar} aria-hidden="true" className="icon" />
        </div>
        
        <div className='tip-section'>
            <p className='label'>Selected Tip %</p>
            <div className='tip-amount-wrapper'>
            <div className='tip-amount'>
            <input type='radio' name='tip'  value='.05'/>
            <div className='tip-btn'>5%</div>
            </div>
            <div className='tip-amount'>
            <input type='radio' name='tip'  value='.10'/>
            <div className='tip-btn'>10%</div>
            </div>
            <div className='tip-amount'>
            <input type='radio' name='tip'  value='.15'/>
            <div className='tip-btn'>15%</div>
            </div>
            <div className='tip-amount'>
            <input type='radio' name='tip'  value='.25'/>
            <div className='tip-btn'>25%</div>
            </div>
            <div className='tip-amount'>
            <input type='radio' name='tip'  value='.5'/>
            <div className='tip-btn'>50%</div>
            </div>
            </div>
            <input type="number" className="number-input" />
        </div>
        
        <div className='label-group'>
            <div className='label-wrapper'>
            <label htmlFor='people' className='label'> Number of People</label>
            <p className='error'>Error</p>
            </div>
            <div className="number-wrapper">
            <input type='number' id="people" className='number-input' />
            <img src={person} aria-hidden="true" className="icon"  />
        </div>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Form