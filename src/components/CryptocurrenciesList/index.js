import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoHeader = () => (
    <div className="list-header">
      <p className="heading">Coin Type </p>
      <div className="section">
        <p className="heading">USD</p>
        <p className="heading">EURO</p>
      </div>
    </div>
  )

  renderCryptoView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptoHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(each => (
            <CryptocurrencyItem key={each.id} cryptocurrencyDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="main-heading">cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderCryptoView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
