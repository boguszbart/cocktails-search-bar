import { useLoaderData, LoaderFunctionArgs, Link } from 'react-router-dom'

type cocktail = {
  drinks: [{ [key: string]: string }]
}

type fetchedData = cocktail

const Cocktail = () => {
  //set data to an object of type cocktail
  const fetchedData: unknown = useLoaderData()
  const cocktailData: fetchedData = fetchedData as fetchedData

  if (cocktailData.drinks === null) {
    return (
      <section className='section'>
        <h2 className='section-title'>No cocktail to display</h2>
      </section>
    )
  }

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
  } = cocktailData.drinks[0]
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
  // error handling in component itself
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
  return response
}
