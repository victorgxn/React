import { useEffect, useState } from "react"


const localCache = {};


export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null
  });


  //Esto hace que si el componente se vuelve a renderizar no se hace una y otra vez la peticion
  useEffect(() => {
    getFetch();

  }, [url]) //Si ponemos url, como parametros cada vez que cambie vuelve a hacer la peticion

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    });
  }

  const getFetch = async () => {

    //Ganamos rendimiento no tenemos que hacer peticiones de algo que ya ha sido consumido anteriormente
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null
      });
      return;
    }

    //Para cada vez que cambie se vuelva a esteblecer los valores iniciales.
    setLoadingState();


    const resp = await fetch(url)


    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null
    })
    //Guardamos clave-valor
    localCache[url] = data;
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
