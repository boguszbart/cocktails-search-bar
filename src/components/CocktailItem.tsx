import React from 'react'
import { Link } from 'react-router-dom'

type cocktail = {
  id: string
  img: string
  drinkName: string
  drinkGlass: string
  drinkAlcoholic: string
}

const Cocktail = ({ id, img, drinkName, drinkGlass, drinkAlcoholic }: cocktail) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt='' />
      </div>
      <div className='cocktail-footer'>
        <h3>{drinkName}</h3>
        <h4>{drinkGlass}</h4>
        <p>{drinkAlcoholic}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
