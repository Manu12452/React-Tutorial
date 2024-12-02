// import React from 'react'

// const App = () => {

//   let userName = "Manu"

//   const changeUserName = ()=>{
//     console.log(userName)
//     userName = "Mradul"
//     console.log(userName)
//   } 

//   return (
//     <div>
//       <h1>User name is {userName}</h1>
//       <button onClick={changeUserName}>Change User</button>
//     </div>
//   )
// }

// export default App




// import React, {useState} from 'react'

// const App = () => {

//   const [a, setA] = useState(10)

//   const changeA = ()=>{
//     console.log("Chal gaya")

//   setA(60)
//   }


//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={changeA}>Change A</button>
//     </div>
//   )
// }

// export default App



// import React, {useState} from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)
//   return (
//     <div>
//       <h1>Number is {num}</h1>
//       <button onClick={()=>{
//         setNum(num+10)
//       }}>increment</button>
//       <button onClick={()=>{
//         setNum(num-10)
//       }}>decrement</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h2 className='text-5xl bg-red-900 '>Hello guys</h2>
//       <h2>Hello</h2>
//     </div>
//   )
// }

// export default App



// import React, {useState} from 'react'

// const App = () => {

// const [userName, setuserName] = useState('')

// const submitHandler = (e)=>{
//   e.preventDefault()
//   console.log(userName)
//   setuserName('')
// }

//   return (
//     <div><form onSubmit={(e)=>{
//       submitHandler(e)
//     }}>
//       <input value={userName} onChange={(e)=>
//         setuserName(e.target.value)
//       } className='px-4 py-3 text-xl m-5 rounded text-black' type="text" placeholder='Enter your name'/>
//       <button className='px-4 py-3 text-white text-xl m-5 font-semibold bg-emerald-600 rounded'>Submit</button>
//     </form>
//       </div>
//   )
// }

// export default App





// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//     <Footer />
//     <nav className='bg-emerald-950 flex px-10 py-5 items-center justify-between'>
//     <h2 className='text-2xl'>Practice</h2>
//     <Header />
//     </nav>
//     </>
//   )
// }

// export default App





// import React from 'react'
// import Card from './components/Card'


// const App = () => {
//   return (
//     <div>
//       <Card  user='manu'/>
//       <Card user='Mradul'/>
//     </div>
//   )
// }

// export default App






// import React from 'react'
// import Card from './components/Card'

// const App = () => {


//   const users = [
//     {
//       "name": "Alice Johnson",
//       "city": "New York",
//       "age": 29,
//       "profession": "Software Engineer",
//       "profile_photo": "https://example.com/photos/alice.jpg"
//     },
//     {
//       "name": "Bob Smith",
//       "city": "Los Angeles",
//       "age": 34,
//       "profession": "Graphic Designer",
//       "profile_photo": "https://example.com/photos/bob.jpg"
//     },
//     {
//       "name": "Charlie Brown",
//       "city": "Chicago",
//       "age": 22,
//       "profession": "Marketing Specialist",
//       "profile_photo": "https://example.com/photos/charlie.jpg"
//     },
//     {
//       "name": "Dana Lee",
//       "city": "San Francisco",
//       "age": 40,
//       "profession": "Data Scientist",
//       "profile_photo": "https://example.com/photos/dana.jpg"
//     },
//     {
//       "name": "Eve Williams",
//       "city": "Austin",
//       "age": 28,
//       "profession": "UX/UI Designer",
//       "profile_photo": "https://example.com/photos/eve.jpg"
//     }
//   ]
  


//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem,idx) {
//           return <Card key={idx} user={elem.name} age={elem.age} profession={elem.profession} city={elem.city} photo={elem.profile_photo} />
//         })}
//       {/* <Card user="Manu" surname="Saxena" age='25' city=" Bareilly" /> */}
//       </div>
//     </div>
//   )
// }

// export default App








// import React from 'react'
// import Ex from './components/Ex'

// const App = () => {
//   return (
//     <div>
//       <Ex name="Manu" />
//     </div>
//   )
// }

// export default App






// import React, {useEffect, useState} from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data, setData] = useState([])

//   const getData = async ()=>{
//     const response = await axios.get('https://picsum.photos/v2/list')

//     setData(response.data)

//     useEffect(() => {
//       getData()
//     }, [])
    

//   }



//   return (
//     <div className='p-10'>
//        <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//        <div className='p-5 mt-5 bg-gray-950'></div>

//        {data.map(function(elem, idx){
//         return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>

//           <img className='h-40' src={elem.download_url} alt="" />
//           <h1>{elem.author}</h1>
//         </div>
//        })}
//     </div>
//   )
// }

// export default App








// import React from 'react'
// import{Route, Routes} from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Header from './components/Header'


// const App = () => {
//   return (
//     <div>
//       <Header />

//       <Routes>
//         <Route path='/about' element={<About />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/' element={<Home />}/>
//         <Route path='/product' element={<Product />}/>
//       </Routes>
//     </div>
//   )
// }

// export default App









import React from 'react'
import Header from './components2/Header'
import Footer from './components2/Footer'
import Section from './components2/Section'
import { DataContext } from './context/UserContext'

const App = () => {

  const data = useContext(DataContext)
  console.log(data)

  return (
    <div>
      <h1>This is App.js</h1>

    <Header />
    <Footer />
    <Section />
    </div>

  )
}

export default App






















