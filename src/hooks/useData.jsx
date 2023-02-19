import { useEffect, useState } from 'react'

function useData(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response)
        setIsLoading(false)

      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [url])

  return {
    data,
    isLoading,
    error,
    isError: !!error,
    isSuccess: !!data,
    
  }
}

export default useData
