// import React from 'react'

// const Header = () => {
//   return (
//     <div className='flex gap-10 items-center'>
//       <h4 className='text-xl'>About</h4>
//       <h4 className='text-xl'>Contact</h4>
//       <h4 className='text-xl'>Services</h4>
//       <h4 className='text-xl'>Login</h4>
//       </div>
//   )
// }

// export default Header







import React from 'react'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Manu <input className='text-black' type="text" /></h2>
      <div className='flex gap-10 text-lg underline'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>

  )
}

export default Header







