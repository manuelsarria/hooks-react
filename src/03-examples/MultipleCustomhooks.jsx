import { useFetch } from "../hooks/useFetch"

export const MultipleCustomhooks = () => {

    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1')

    const {author, quote } =  !!data && data[0];

  return (
    <>
      <h1>Breqking bad quotes</h1>
      <hr/>
      {
        isLoading
            ? (
              <div className="alert alert-info text-center">
                loading ......
              </div>
            )
            : (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{ quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
              </blockquote>
            )
      }

      <button className="btn btn-primary">
        Next Quote
      </button>

    </>
  )
}
