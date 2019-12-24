import React from 'react'

const Grocery = props => {
  let groceryName = props.name

  return(
    <li>
      {groceryName}
      <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
    </li>
  )
}

export default Grocery
