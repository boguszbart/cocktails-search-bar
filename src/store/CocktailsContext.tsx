import React, { useState, useEffect, useContext, useCallback } from 'react'

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
  const [filteredValue, setFilteredValue] = useState<string>('a')

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}${filteredValue}`)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      const { drinks } = data
      if (drinks) {
        drinks.sort(function (a: { strDrink: string }, b: { strDrink: string }) {
          if (a.strDrink < b.strDrink) {
            return -1
          }
          if (a.strDrink > b.strDrink) {
            return 1
          }
          return 0
        })
        const newCocktails = drinks.map((item: cocktail) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })

        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }
    } catch (err) {
      console.log(err.message)
    }
    setIsLoading(false)
  }, [filteredValue])

  const filterCocktails = (text: string) => {
    setFilteredValue(text)
  }

  useEffect(() => {
    fetchData()
  }, [filteredValue, fetchData])

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
