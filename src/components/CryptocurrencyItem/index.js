import {Component} from 'react'
import './index.css'

const CryptocurrencyItem = proops => {
  const {cryptocurrencyDetails} = proops
  const {
    currencyLogoUrl,
    CurrencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="cryptocurrency-item">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={CurrencyName}
        />
        <p className="currency-name">{CurrencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
