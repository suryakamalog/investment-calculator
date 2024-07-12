import { useState } from "react";
import { formatter } from "../util/investment";
const Result = ({ result }) => {
  let initialInvestment;
    if (result) {
         initialInvestment =
      result[0].valueEndOfYear -
      result[0].interest -
      result[0].annualInvestment;
  }

  return (
    <>
      <div>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {result &&
              result.map((item, index) => {
                const totalInterest =
                  item.valueEndOfYear -
                  item.annualInvestment * item.year -
                  initialInvestment;
                const totalAmountInvested = item.valueEndOfYear - totalInterest;
                return (
                  <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Result;
