
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/pricingOptions'
import ResultChart from './Components/ResultChart/ResultChart'


const pricingPromise = fetch('./pricingData.json')
.then(res=>res.json());

function App() {
  

  return (
    <>

    <header>
      <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

     <ResultChart></ResultChart>
    </main>
    </>
  )
}

export default App
