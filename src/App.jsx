
import { Suspense } from 'react'
import './App.css'
import ActiveUsers from './Components/ActiveUsers/ActiveUsers'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import AllProducts from './Components/AllProducts/AllProducts'
import Stepts from './Components/Steps/Stepts'
import Footer from './Components/Footer/Footer'
import PricingCard from './Components/Pricing/PricingCard'

const fetchData = async ()=>{
  const res = await fetch('productsData.json');
  return res.json()
}
function App() {
  
  const productsPromise = fetchData();

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <ActiveUsers></ActiveUsers>
      <Suspense >
        <AllProducts productsPromise={productsPromise}></AllProducts>
      </Suspense>

      <Stepts></Stepts>
      <PricingCard></PricingCard>
      <Footer></Footer>
    </>
  )
}

export default App
