// import React from 'react'
// import Navbar from './Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Home'

// function App() {
//     return (
//         <div>
//             <Navbar />
//             <Routes>
//                 <Route path='/' element={<Home/>} />
//             </Routes>
//         </div>
//     )
// }

// export default App

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Us from './Us'
import Choose from './Choose'
import Why from './Why'
import Navbar from './Navbar'
import FAQ from './FAQ'
import Waitlist from './Waitlist'

function App() {
    return (
        <div>
            <Navbar/>
            <Header />
            <Us/>
            <Choose/>
            <Why/>
            <FAQ/>
            <Waitlist/>
            <Footer />
        </div>
    )
}

export default App