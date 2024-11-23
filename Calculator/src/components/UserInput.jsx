import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"

export default function UserInput({ values, onSet }) {
  return (
    <>
      <section id='user-input'>
        <div className='input-group'>
          <p>
            <label>initial investment</label>
            <input
              type='number'
              required
              value={values.initialInvestment}
              onChange={(event) =>
                onSet("initialInvestment", parseInt(event.target.value))
              }
            />
          </p>
          <p>
            <label>annual investment</label>
            <input
              type='number'
              required
              value={values.annualInvestment}
              onChange={(event) =>
                onSet("annualInvestment", parseInt(event.target.value))
              }
            />
          </p>
        </div>
        <div className='input-group'>
          <p>
            <label>expect return</label>
            <input
              type='number'
              value={values.expectedReturn}
              required
              onChange={(event) => onSet("expectReturn", parseInt(event.target.value))}
            />
          </p>
          <p>
            <label>duration</label>
            <input
              type='number'
              required
              value={values.duration}
              onChange={(event) => onSet("duration", parseInt(event.target.value))}
            />
          </p>
        </div>
      </section>
    </>
  )
}
