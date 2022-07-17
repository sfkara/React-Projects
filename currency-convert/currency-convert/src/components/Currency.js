import React from 'react'

const Currency = ({ cur }) => {
  return (
    <div>
      <input type="number" className="input" />
      <select>
        {cur.map((option) => (
          <option key={option.id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Currency
