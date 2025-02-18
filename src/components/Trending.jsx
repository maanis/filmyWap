import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import API_OPTIONS from '../utils/ApiOptions'
import { addTrending } from '../store/movieSlice'
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards'
import Loader from './Loader'
import { useDispatch } from 'react-redux';
import SkeletonCards from './SkeletonCards';

const Trending = () => {
    const [trending, settrending] = useState([])
    const [category, setcategory] = useState('all')
    const dispatch = useDispatch()
    const [hasMore, sethasMore] = useState(true)
    const [page, setpage] = useState(1)
    const fetchTrending = async (pageNumber) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/${category}/day?language=en-US&page=${pageNumber}`, API_OPTIONS)
            const res = await data.json()
            if (res.results.length === 0) {
                sethasMore(false)
                return
            }
            settrending(prev => [...prev, ...res.results])
            // setpage(page + 1)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        settrending([]); // Clear previous data
        setpage(1);
        sethasMore(true);
        fetchTrending(1); // Fetch first page when category changes
    }, [category]);

    const fetchMoreData = () => {
        const nextPage = page + 1;
        setpage(nextPage); // Update the page state
        fetchTrending(nextPage);
    };


    return trending.length > 0 ? (
        <>
            <div className="gradient w-[1px] top-0 bottom-0 fixed left-[5%] min-h-full bg-zinc-300"></div>
            <div className='min-h-full w-[94%] relative left-[5%]'>

                <div className="nav w-full h-[9%] shadow-lg flex justify-between items-center px-4">
                    <p className='text-2xl font-semibold'>Trending <small className='text-sm text-zinc-600'>({category})</small></p>
                    <Dropdown options={['all', 'movie', 'tv',]} method={setcategory} />
                </div>
                <InfiniteScroll
                    dataLength={trending.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4 className='w-full text-center mb-2'>Loading...</h4>}
                    className='h-screen w-full'
                >
                    <Cards data={trending} title={category} />
                </InfiniteScroll>
            </div>
        </>
    ) : <SkeletonCards />
}

export default Trending