import React from 'react'
import { Link } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <section className='section'>
        <div className='error-page'>
          <div className='error-container'>
            <h2>oops! It's a dead end</h2>
            <Link to='/' className='btn btn-primary'>back home</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage
