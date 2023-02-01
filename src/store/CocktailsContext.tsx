import React, { useState, useEffect, useContext } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

type cocktail = {
  idDrink: string
  strDrink: string
  [key: string]: string
}

type cocktailsContext = {
  isLoading: boolean
  cocktails: cocktail[]
  filterCocktails: (text: string) => void
}

const CocktailsContext = React.createContext<cocktailsContext>({
  isLoading: false,
  cocktails: [],
  filterCocktails: (text: string) => {},
})

const CocktailsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [cocktails, setCocktails] = useState<cocktail[]>([])
  const [filteredValue, setFilteredValue] = useState<string>('')

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error()
      }
      const data = await response.json()
      data.drinks.sort(function (a: { strDrink: string }, b: { strDrink: string }) {
        if (a.strDrink < b.strDrink) {
          return -1
        }
        if (a.strDrink > b.strDrink) {
          return 1
        }
        return 0
      })
      setCocktails(data.drinks)
    } catch (err: any) {
      console.log(err.message)
    }
    setIsLoading(false)
  }

  const filterCocktails = (text: string) => {
    setFilteredValue(text)
    console.log(filteredValue)
  }
  console.log(cocktails)
  useEffect(() => {
    fetchData()
  }, [])

  const contextValue: cocktailsContext = {
    isLoading,
    cocktails,
    filterCocktails,
  }

  return <CocktailsContext.Provider value={contextValue}>{children}</CocktailsContext.Provider>
}

const useGlobalContext = () => {
  return useContext(CocktailsContext)
}

export { CocktailsContextProvider, useGlobalContext }
