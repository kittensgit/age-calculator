import React from 'react'
import PropTypes from 'prop-types'

const AgeResult = ({ age }) => {
    return (
        <h4 className="mt-10 text-2xl font-bold dark:text-white underline">
            You are {age.years} years, {age.months} months and {age.days} days old
        </h4>
    )
}

AgeResult.propTypes = {
    age: PropTypes.shape({
        years: PropTypes.number.isRequired,
        months: PropTypes.number.isRequired,
        days: PropTypes.number.isRequired
    }
    )
}


export default AgeResult