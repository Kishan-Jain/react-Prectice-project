import {useEffect, useState} from "react"
import fetchCurrencyInfo from "./customHooks/fetchCurrencyInfo"
import './App.css'
import InputBox from "./components/InputBox"

function App() {

  const [getCurrency, selectGetCurrency] = useState("usd") // for value of currecy
  const [requireCurrency, selectRequireCurrency] = useState("inr") 
  const [getCurrencyAmount, setGetCurrencyAmount] = useState(0)
  const [requireCurrencyAmount, setRequireCurrencyAmount] = useState(0)

  const {returnedCurrencyData} = fetchCurrencyInfo(getCurrency)
  const AllCurrenciesOptionsArray = Object.keys(returnedCurrencyData)
  
  
  const swapingCurrency = () => {
    selectGetCurrency(requireCurrency),
    selectRequireCurrency(getCurrency),
    setGetCurrencyAmount(0)
    setRequireCurrencyAmount(0)
  }
  useEffect(() => {
    const value = returnedCurrencyData[requireCurrency]*getCurrencyAmount
    value ? setRequireCurrencyAmount(value) : setRequireCurrencyAmount(0) 
  }, [getCurrencyAmount, getCurrency, requireCurrency,])
  
  return (
    <div 
    className="w-full h-dvh "
    s 
    style={{
      backgroundImage : `url('https://media.istockphoto.com/id/184405133/photo/currencies.jpg?s=1024x1024&w=is&k=20&c=YVhd-lDu074FYtwLC5E5C3TWq880y8hlnbuIlGHHpHo=')`,
      
    }}
    >
      <div className=" text-center w-full max-w-md mx-auto text-gray-500 font-mono font-extrabold text-4xl  rounded-lg">
        <br />
        <h1 className="bg-white rounded-lg text-blue-300 select-none">
          Currency Conterter
        </h1>
      </div>
      <div
      className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-2 mt-5 backdrop-blur-sm bg-blue-200" 
      >
        <div>
          < InputBox 
          className="justify-center items-center"
          label = "getCurrency"
          currencyName={getCurrency}
          setCurrencyName={selectGetCurrency}
          currencyOptions={AllCurrenciesOptionsArray}
          currencyAmount={getCurrencyAmount}
          setCurrencyAmount={setGetCurrencyAmount}
          />
        </div>
        <div className="bg-white relative w-full h-0.5 select-none">
          <button 
          type="button"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-400 text-white px-2 py-0.5"
          onClick={swapingCurrency}
          >SWAP Currency</button>
        </div>
        <div className="w-full mt-1 mb-4">
          < InputBox 
          label = "requireCurrency"
          currencyName={requireCurrency}
          setCurrencyName={selectRequireCurrency}
          currencyOptions={AllCurrenciesOptionsArray}
          currencyAmount={requireCurrencyAmount}
          readOnly = {true}
          setCurrencyAmount={setRequireCurrencyAmount}
        />
        </div>
      </div>


    </div>
  )
}

export default App
