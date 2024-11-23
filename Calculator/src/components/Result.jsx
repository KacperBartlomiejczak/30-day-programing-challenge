import { calculateInvestmentResults } from "../util/investment"

import { formatter } from "../util/investment"

export default function Result({ data }) {
  const calculated = calculateInvestmentResults({
    initialInvestment: data.initialInvestment,
    annualInvestment: data.annualInvestment,
    expectedReturn: data.expectedReturn,
    duration: data.duration,
  })

  const initialInterest =
    calculated[0].valueEndOfYear -
    calculated[0].interest -
    calculated[0].annualInvestment
  console.log(calculated)

  

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculated.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInterest

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
