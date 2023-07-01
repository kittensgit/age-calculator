import React, { useState } from 'react'
import PropsTypes from 'prop-types'

const AgeCalculatorForm = ({calculateAge}) => {

    const [birthDate, setBirthDate] = useState('')

    const handleChangeDate = (e) => {
        setBirthDate(e.target.value)
        console.log(birthDate)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        calculateAge(birthDate)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={birthDate} type='date' onChange={handleChangeDate} />
            <button disabled={!birthDate} type='submit'>Caclulate age</button>
        </form>
    )
}

export default AgeCalculatorForm