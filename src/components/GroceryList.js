import React from 'react'
import Grocery from './Grocery'

const GroceryList = props => {

  const groceryItems = props.groceries.map((groceryObject) => {
    return(
      <Grocery
        name={groceryObject.name}
      />
    )
  })

  return(
    <ul>{groceryItems}</ul>
  )
}

export default GroceryList
