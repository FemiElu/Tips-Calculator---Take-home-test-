import React from "react";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Form = ({
 bill, setBill, tip, setTip, people, setPeople
}) => {

    const handleSelectedTip = (e) =>{
         setTip(+e.target.value)
    }
  return (
    <>
      <div className="form">
        <div className="label-group">
          <div className="label-wrapper">
            <label className="label" htmlFor="bill">
              Bill
            </label> 
            <p className="error">
              {""}
            </p>
          </div>
          <div className="number-wrapper">
            <input
              type="number"
              id="bill"
              className="number-input"
              onInput={(e)=>setBill(+e.target.value)}
             
            />
            <img src={dollar} aria-hidden="true" className="icon" />
          </div>

          <div className="tip-section">
            <p className="label">Selected Tip %</p>
            <div className="tip-amount-wrapper">
              <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} name="tip" id="input1" value="5" />
                <label htmlFor="input1" className="tip-btn">5%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" className="tip-input"onInput={handleSelectedTip} name="tip" id="input2" value="10"  />
                <label htmlFor="input2" className="tip-btn">10%</label>
              </div>
              <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} name="tip" id="input3" value="15" />
                <label htmlFor="input3" className="tip-btn">15% </label>
              </div>
              <div className="tip-amount">
                <input type="radio" className="tip-input"onInput={handleSelectedTip} name="tip" id="input4" value="25"/>
                <label htmlFor="input4" className="tip-btn">25% </label>
              </div>
              <div className="tip-amount">
                <input type="radio" className="tip-input"onInput={handleSelectedTip} name="tip" id="input5" value="5" />
                <label htmlFor="input5" className="tip-btn">50%</label>
              </div>
              <div className="custom-wrapper">
            <input type="text" onInput={handleSelectedTip} placeholder="Custom" name="tip" className="number-input tip-custom" id="custom" />
            <label htmlFor="custom" className="tip-custom-label">Custom</label>
            </div>
          </div>
          </div>

          <div className="label-group">
            <div className="label-wrapper">
              <label htmlFor="people" className="label">
                Number of People
              </label>
              <p className="error">{people === 0? "can't be zero": ""}</p>
            </div>
            <div className="number-wrapper">
              <input type="number" 
                     id="people" 
                     name="tip" 
                     className="number-input" 
                     value={people}
                     onInput={(e)=>setPeople(+e.target.value)}
                     />
              <img src={person} aria-hidden="true" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
