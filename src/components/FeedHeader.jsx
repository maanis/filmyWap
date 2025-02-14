import React from 'react'
import { Link } from 'react-router-dom'

const FeedHeader = ({ data }) => {
    if (!data) return
    return (
        <div style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('https://image.tmdb.org/t/p/original${data.backdrop_path || data.poster_path || data.profile_path}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
        }} className='w-full h-[65%] relative'>
            <div className='absolute top-1/2 p-[5%] -translate-y-1/2 text-white'>
                <h2 className='text-5xl font-black'>{data.title || data.name || data.original_name}</h2>
                <p className=' text-zinc-300 w-[45%] my-3'>{data.overview.slice(0, 200)}... <Link to={`/${data.media_type}/${data.id}`} className='text-blue-400 cursor-pointer hover:underline'>more</Link></p>
                <p className='capitalize'>
                    <i className="ri-megaphone-line mr-1 text-yellow-400"></i>{data.release_date || 'NA'}
                    <i className="ri-film-fill mr-1 text-yellow-400 ml-4"></i>{data.media_type}
                </p>
                <button className='px-4 py-1 rounded-md bg-red-500 hover:bg-red-700 transition-colors mt-3 cursor-pointer font-semibold text-lg'>Watch trailer</button>
            </div>
        </div>
    )
}

export default FeedHeader