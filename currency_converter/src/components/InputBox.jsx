import React, {useId} from 'react'

function InputBox(
    {
        className = "",
        label,
        currencyName,
        setCurrencyName,
        readOnly = false,
        currencyOptions = [],
        currencyAmount,
        setCurrencyAmount

    }
) {
    const uniqueId = useId()
  return (
    <div className={`${className} p-3 rounded-lg text-lg flex`}>
      <div className='w-1/2'>
        <label 
        htmlFor={uniqueId}
        className="text-black/40 mb-2 inline-block select-none"
        >{label}</label>
        <select 
        name={label} 
        className='rounded-lg px-2 py-1 text-sm bg-gray-100 cursor-pointer outline-none select-none'
        id={uniqueId}
        value={currencyName}
        onChange={e => setCurrencyName && setCurrencyName(e.target.value) }
        >
          {
            currencyOptions.map(crr => (
              <option key={crr} value={crr}>
                  {crr?.toUpperCase()}
                </option>
            ))
          }
        </select>
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <input 
        type="number"
        className="outline-none w-full bg-transparent py-1.5"
        id={uniqueId}
        value={currencyAmount}
        onChange={e => setCurrencyAmount && setCurrencyAmount(e.target.value)}
        readOnly = {readOnly}
        />
      </div>
      
    </div>
  )
}

export default InputBox
