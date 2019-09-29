import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { ADD_ITEM, REMOVE } from './actions'

import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = () => {
  const dispatch = useDispatch()

  const additionalPrice = useSelector(state => state.additionalPrice)
  const car = useSelector(state => state.car)
  const store = useSelector(state => state.store)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log(item)
    dispatch({ type: REMOVE, payload: item })
  }

  const buyItem = item => {
    // dipsatch an action here to add an item
    let index = car.features.findIndex(element => element.name === item.name)
    index === -1 && dispatch({ type: ADD_ITEM, payload: item })
  }

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className='box'>
        <AdditionalFeatures store={store} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  )
}

export default App
