import React, { useState } from 'react'
import Cards from './Cards'
import DetsNav from './DetsNav'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Playlist = () => {
    const [showText, setshowText] = useState(true)


    const playlist = useSelector(state => state.movies.playlist)
    console.log(playlist)

    return (
        <div className='h-screen w-full bg-zinc-800'>
            <DetsNav />
            {playlist.length > 0 ? <div className='w-full h-full overflow-y-auto overflow-x-hidden p-5 flex flex-wrap gap-5'>
                {playlist.map((d, i) => (
                    <Link to={`/${d.Dets.media_type || d.title}/${d.Dets.id}`} style={{
                        backgroundImage: d.Dets.backdrop_path || d.Dets.poster_path || d.Dets.profile_path ? `url('https://image.tmdb.org/t/p/original${d.Dets.backdrop_path || d.Dets.poster_path || d.Dets.profile_path})` : `url(${noImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }} key={i} className={`w-[13%]  transition-all relative rounded-md cursor-pointer h-[16rem] inline-block shrink-0`}>
                        {d.Dets.vote_average >= 0 && <div className="absolute top-8 right-[-15px] bg-yellow-500 rounded-full h-[45px] z-50 flex justify-center items-center font-semibold text-lg w-[45px]">{(d.Dets.vote_average * 10).toFixed()}<sup className='text-xs'>%</sup>
                        </div>}
                        <div className="gradient z-10 absolute h-full w-full bg-gradient-to-t from-black rounded-md"></div>
                        <h2 className={`z-50 ${showText ? 'visible' : 'hidden'} text-white absolute text-center w-full bottom-2 font-semibold`}>{d.Dets.title || d.Dets.name || d.Dets.original_name}</h2>
                    </Link>
                ))}
            </div> : <h2 className='h-full w-full flex justify-center items-center text-nowrap text-4xl text-white'>Nothing to Show...</h2>}
        </div>
    )
}

export default Playlist