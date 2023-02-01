import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../store/CocktailsContext'

const Cocktail = () => {
  const params = useParams()
  const { cocktails } = useGlobalContext()

  const filteredCocktail = cocktails.filter(cocktail => cocktail.idDrink === params.cocktailId)
  console.log(filteredCocktail)
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = filteredCocktail[0]
  const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {strDrink}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {strCategory}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {strGlass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {strInstructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cocktail
