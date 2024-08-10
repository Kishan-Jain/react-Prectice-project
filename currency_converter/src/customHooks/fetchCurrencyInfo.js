import {useEffect, useState} from "react"


const fetchCurrencyInfo = (currency) => {
    const [returnedCurrencyData, setReturnedCurrencyData] = useState({})

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setReturnedCurrencyData(res[currency]))
    },[currency])
    return {returnedCurrencyData}
}

export default fetchCurrencyInfo