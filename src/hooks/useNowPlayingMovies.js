import { useDispatch } from "react-redux"
import API_OPTIONS from "../utils/ApiOptions"
import { addMovies } from "../store/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const fetchingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addMovies(json.results))
    }
    useEffect(() => {
        fetchingMovies()
    }, [])
}

export default useNowPlayingMovies