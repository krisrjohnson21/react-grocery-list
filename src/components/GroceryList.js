import React from 'react'
import Grocery from './Grocery'

const GroceryList = props => {

  const groceryItems = props.groceries.map((groceryObject) => {
    return(
      <Grocery
        name={groceryObject.name}
        key={groceryObject.id}
      />
    )
  })

  return(
    <ul>{groceryItems}</ul>
  )
}

export default GroceryList
