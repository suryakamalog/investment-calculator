import { useState } from "react";

const Form = ({
  handleOnSubmitInitialInvestment,
  handleOnSubmitAnnualInvestment,
  handleOnSubmitExpectedReturn,
  handleOnSubmitDuration,
}) => {

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              onChange={(e) => handleOnSubmitInitialInvestment(e.target.value)}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              onChange={(e) => handleOnSubmitAnnualInvestment(e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              onChange={(e) => handleOnSubmitExpectedReturn(e.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              onChange={(e) => handleOnSubmitDuration(e.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
};

export default Form;
