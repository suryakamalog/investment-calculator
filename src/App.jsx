import Form from "./components/Form";
import Result from "./components/Result";
import Header from "./components/Header";
import { calculateInvestmentResults, formatter } from "./util/investment";
import { useState } from "react";

const calulateResult = (
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration
) => {
  let investmentResult;

  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    investmentResult = calculateInvestmentResults({
      initialInvestment: initialInvestment,
      annualInvestment: annualInvestment,
      expectedReturn: expectedReturn,
      duration: duration,
    });
  }
  return investmentResult;
};

function App() {
  const [initialInvestment, setInitialInvestment] = useState(null);
  const [annualInvestment, setAnnualInvestment] = useState(null);
  const [expectedReturn, setExpectedReturn] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleOnSubmitInitialInvestment = (value) => {
    setInitialInvestment(+value);
  };
  const handleOnSubmitAnnualInvestment = (value) => {
    setAnnualInvestment(+value);
  };
  const handleOnSubmitExpectedReturn = (value) => {
    setExpectedReturn(+value);
  };
  const handleOnSubmitDuration = (value) => {
    setDuration(+value);
  };

  const result = calulateResult(
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  );

  return (
    <div>
      <Header />
      <Form
        handleOnSubmitInitialInvestment={handleOnSubmitInitialInvestment}
        handleOnSubmitAnnualInvestment={handleOnSubmitAnnualInvestment}
        handleOnSubmitExpectedReturn={handleOnSubmitExpectedReturn}
        handleOnSubmitDuration={handleOnSubmitDuration}
      />
      <Result result={result} />
    </div>
  );
}

export default App;
