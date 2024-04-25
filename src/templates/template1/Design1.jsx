import React from 'react'
import background from '../../assets/template1/bg.jpg'


const Design1 = () => {
  return (
    <div className='min-h-screen flex flex-col text-white bg-cover py-4' style={{ backgroundImage: `url(${background})` }}>
      <main className='container mx-auto px-6 flex-1 text-center'>
        <h2 className="text-2xl md:text-4xl lg:text-6xl">
          Welcome to
        </h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8">
          The Club
        </h1>
        <div className="div text-lg md:text-2xl lg:text-3xl text-white py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12
        bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
          151,129 members
        </div>
        <form action='' method='' id='' name='' target='' >
          <div className="flex flex-col md:flex-row justify-center mb-4">
            <input
              placeholder='E.g. johndoe@gmail.com'
              type='email'
              name='member[email]'
              className='text-lg md:text-2xl placeholder:text-gray-400 
              placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full
              md:rounded-br-none md:rounded-tr-none mb-4 md:mb-0'
            />
            <input
              type='submit'
              value='Join today'
              name='member[name]'
              className='bg-red-400 rounded-full md:rounded-tl-none md:rounded-bl-none py-4 px-6 md:px-10 lg:py-6 lg:px-12
              text-lg md:text-2xl cursor-pointer hover:opacity-75 duration-150' />
          </div>
          <div className="opacity-75 italic">
            By subscribing you agree with our<a className='hover:opacity-80 duration-150'>Terms of Service </a>
            and <a className='hover:opacity-80 duration-150'>Privacy policy</a>.
            <a></a>
          </div>
        </form>

      </main>
      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <p>Built with React and Tailwindcss</p>
        <div className='flex -mx-6'>
          <a className='mx-3 hover:opacity-80 duration-150'>About us</a> |
          <a className='mx-3 hover:opacity-80 duration-150'>Privacy</a> |
          <a className='mx-3 hover:opacity-80 duration-150'>Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default Design1