import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrenciesData: [],
    isLading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    this.setState({
      cryptocurrenciesData: data.map(each => ({
        id: each.id,
        currencyLogoUrl: each.currency_logo,
        CurrencyName: each.currency_name,
        usdValue: each.usd_value,
        euroValue: each.euro_value,
      })),
      isLading: false,
    })
  }

  renderCryptocurrenciesList = () => {
    const {cryptocurrenciesData} = this.state

    return (
      <CryptocurrenciesList
        key={CryptocurrenciesList.id}
        cryptocurrenciesData={cryptocurrenciesData}
      />
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLading} = this.state

    return (
      <div className="app-container">
        {isLading ? this.renderLoader() : this.renderCryptocurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
