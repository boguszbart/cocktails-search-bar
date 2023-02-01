import React from 'react'
import { useGlobalContext } from '../store/CocktailsContext'
import Cocktail from './CocktailItem'

const CocktailsList = () => {
  const { cocktails, isLoading } = useGlobalContext()

  const cocktailsShowcase = cocktails.map(cocktail => {
    return (
      <Cocktail
        key={cocktail.idDrink}
        id={cocktail.idDrink}
        img={cocktail.strDrinkThumb}
        drinkName={cocktail.strDrink}
        drinkGlass={cocktail.strGlass}
        drinkAlcoholic={cocktail.strAlcoholic}
      />
    )
  })

  return (
    <div className='section'>
      {isLoading && <div className='loader'></div>}
      {!isLoading && (
        <>
          <h1 className='section-title'>Cocktails</h1>
          <div className='cocktails-center'>{cocktailsShowcase}</div>
        </>
      )}
    </div>
  )
}

export default CocktailsList
