import React from 'react'
import { useGlobalContext } from '../store/CocktailsContext'

const SearchForm = () => {
  const {filterCocktails}= useGlobalContext()

  return (
    <section className='section search'>
      <div className='search-form'>
        <div className='form-control'>
          <label htmlFor='search'>Search Your Favorite Cocktail</label>
          <input type='text' id='search' onChange={(e) => {
            filterCocktails(e.target.value)
          }}/>
        </div>
      </div>
    </section>
  )
}

export default SearchForm
