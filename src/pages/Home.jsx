import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate();
    return (
        <div className='flex w-screen h-screen justify-center items-center gap-4'>
            <button
                className='px-4 py-1 bg-indigo-600 rounded-md text-white font-bold hover:bg-opacity-75'
                onClick={() => navigate('/template1')}
            >
                Template1
            </button>
            <button
                className='px-4 py-1 bg-indigo-600 rounded-md text-white font-bold hover:bg-opacity-75'
                onClick={() => navigate('/template2')}
            >
                Template2
            </button>
            <button
                className='px-4 py-1 bg-indigo-600 rounded-md text-white font-bold hover:bg-opacity-75'
                onClick={() => navigate('/template3')}
            >
                Template3
            </button>
            <button
                className='px-4 py-1 bg-indigo-600 rounded-md text-white font-bold hover:bg-opacity-75'
                onClick={() => navigate('/template4')}
            >
                Template4
            </button>
        </div>
    )
}

export default Home