import React from 'react'
import { useGlobalContext } from '../store/CocktailsContext'
import Cocktail from './CocktailItem'

const CocktailsList = () => {
  const { cocktails, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loader'></div>
  }

  if (cocktails.length < 1) {
    return <h2 className='section-title'>no cocktails matched your search criteria</h2>
  }

  const cocktailsShowcase = cocktails.map(cocktail => {
    return (
      <Cocktail
        key={cocktail.id}
        id={cocktail.id}
        img={cocktail.image}
        drinkName={cocktail.name}
        drinkGlass={cocktail.glass}
        drinkAlcoholic={cocktail.info}
      />
    )
  })

  return (
    <div className='section'>
      <h1 className='section-title'>Cocktails</h1>
      <div className='cocktails-center'>{cocktailsShowcase}</div>
    </div>
  )
}

export default CocktailsList
