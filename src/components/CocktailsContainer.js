import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'

const urlCocktails = "http://localhost:3000/sushis"

class CocktailsContainer extends Component {

fetchCocktails = () => {
  fetch(urlCocktails)
  .then(res => res.json())
  .then(res => console.log())

}
  render(){
    return (
      <div className="container">

      </div>
    )
  }
}

export default CocktailsContainer
