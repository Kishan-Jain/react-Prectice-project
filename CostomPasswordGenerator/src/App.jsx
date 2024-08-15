import { useRef, useCallback, useEffect, useState } from 'react'
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
  
  const copyPassword = useCallback(() => {
      window.navigator.clipboard.writeText(password)
  }, [password])

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
      <div className='w-full max-w-xl mx-auto p-10 border-4 rounded-xl border-yellow-50'>
        <div className='border-2 rounded-xl w-full'>
          <input 
          type="text"
          className="overflow-scroll w-10/12 p-2 bg-orange-100 "
          value={password}
          name='password'
          readOnly
           />
          <button 
          type="button"
          onClick={copyPassword}
          className='
          inline-flex justify-center w-2/12 bg-orange-300 py-2 border-l-0 rounded-r-xl font-extrabold
           hover:bg-orange-400 hover:text-gray-700'
          >Copy</button>
        </div>
        <div className=''>
        <div className=''>
              <input type="range"
              className='cursor-pointer'
              value={passwordLength}
              min={8}
              max={36}
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
          <label htmlFor='charectorInput'> Charector </label>
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
