import React,{useEffect, useState} from 'react'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'

type cocktail = {
  idDrink: string
  strDrink: string
  [key: string]: string
}

const Cocktail = () => {
  const [coccktail, setCocktail] = useState<cocktail>()
  //setting data to an object of type cocktail
  const cocktailData: unknown = useLoaderData()
  const objectData:cocktail = cocktailData as cocktail

  console.log()
  useEffect(() => {
    setCocktail(objectData)
  },[])



  // const filteredCocktail = cocktails.filter(cocktail => cocktail.id === params.cocktailId)
  // const {
  //   strDrink,
  //   strDrinkThumb,
  //   strCategory,
  //   strAlcoholic,
  //   strGlass,
  //   strInstructions,
  //   strIngredient1,
  //   strIngredient2,
  //   strIngredient3,
  //   strIngredient4,
  //   strIngredient5,
  // } = filteredCocktail[0]
  // const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

  // if (!filteredCocktail) {
  //   return <h2 className='section-title'>No such cocktail</h2>
  // }

  return (
    <div>hello</div>
    // <section className='section cocktail-section'>
    //   <Link to='/' className='btn btn-primary'>
    //     back home
    //   </Link>
    //   <h2 className='section-title'>{strDrink}</h2>
    //   <div className='drink'>
    //     <img src={strDrinkThumb} alt={strDrink} />
    //     <div className='drink-info'>
    //       <p>
    //         <span className='drink-data'>name:</span>
    //         {strDrink}
    //       </p>
    //       <p>
    //         <span className='drink-data'>category:</span>
    //         {strCategory}
    //       </p>
    //       <p>
    //         <span className='drink-data'>info:</span>
    //         {strAlcoholic}
    //       </p>
    //       <p>
    //         <span className='drink-data'>glass:</span>
    //         {strGlass}
    //       </p>
    //       <p>
    //         <span className='drink-data'>instructions:</span>
    //         {strInstructions}
    //       </p>
    //       <p>
    //         <span className='drink-data'>ingredients:</span>
    //         {ingredients.map((ingredient, index) => {
    //           return ingredient ? <span key={index}>{ingredient}</span> : null
    //         })}
    //       </p>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Cocktail

export const loader = async ({ params }: LoaderFunctionArgs): Promise<any> => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`)
    const data = await response.json()
    const { drinks } = data
    return drinks[0]
  } catch (error) {
    console.log(error.message)
  }
}
