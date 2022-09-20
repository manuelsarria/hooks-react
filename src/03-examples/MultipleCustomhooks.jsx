import { useFetch } from "../hooks/useFetch"

export const MultipleCustomhooks = () => {

    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1')

  return (
    <>
      <h1>Breqkingbad quotes</h1>
      <hr/>


    </>
  )
}
