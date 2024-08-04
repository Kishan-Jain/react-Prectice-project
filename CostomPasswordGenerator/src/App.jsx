import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(10)
  const [characterAllow, setCharacterAllow] = useState(true)
  const [numberAllow, setNumberAllow]  = useState(false)
  const [specialCharectorAllow, setSpecialCharectorAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordGenrator = useCallback(()=>{
    let pswd = ""
    let value = ""
    const charector = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    const number = `0123456789`
    const specialCharector = `!@#$%^&*'"?:;{}[]()~`
    
    if(characterAllow) value += charector
    if (numberAllow) value += number
    if (specialCharectorAllow) value += specialCharector

    for(let i=1; i<=passwordLength; i++){
      pswd += value.charAt(Math.floor(Math.random() * value.length +1))
    }
    setPassword(pswd)
  }
  ,[passwordLength, numberAllow, characterAllow, specialCharectorAllow])
  

  useEffect(()=>{
    passwordGenrator()
  },
  [passwordLength, numberAllow, characterAllow, specialCharectorAllow])

  return (
    <>
    <h1 className='
    py-10 text-5xl font-serif font-semibold mx-auto text-center bg-yellow-100 text-yellow-800
    '>Custom Password Genrator</h1>
    <div className='p-5 border-2 border-yellow-50'>
      <div className='w-full max-w-md mx-auto p-10 border-2 border-yellow-50'>
        <div className=''>
              {password}
        </div>
        <div className=''>
        <div className=''>
              <input type="range"
              className='cursor-pointer'
              value={passwordLength}
              min={4}
              max={48}
              onChange={(e) => {setPasswordLength(e.target.value)}}

              />
              <label> Length : {passwordLength}</label>
        </div>
        <div className="">
          <input type="checkbox" 
          id='charectorInput'
          className=''
          defaultChecked={characterAllow}
          onChange={() => {setCharacterAllow((prev) => !prev)}}
          />
          <label htmlFor='numberInput'> Charector </label>
        </div>
        <div className="">
          <input type="checkbox" 
          id='numberInput'
          className=''
          defaultChecked={numberAllow}
          onChange={() => {setNumberAllow((prev) => !prev)}}
          />
          <label htmlFor='numberInput'> Number</label>
        </div>
        <div className="">
          <input type="checkbox" 
          className=''
          id='specialCharectorInput'
          defaultChecked={specialCharectorAllow}
          onChange={ () => { setSpecialCharectorAllow((prev) => !prev)}}
          />
          <label htmlFor='specialCharectorInput'> Special-Charector</label>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
