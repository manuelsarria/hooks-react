import { useCounter, useFetch } from "../hooks";

export const MultipleCustomhooks = () => {
    
    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    // const {author, quote} = !!data && data[0];

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
                <p className="mb-1">{ data.quote }</p>
                <footer className="blockquote-footer">{ data.author }</footer>
              </blockquote>
            )
      }

      <button className="btn btn-primary"
        onClick={() => increment()}>
        Next Quote
      </button>

    </>
  )
}
