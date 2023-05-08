import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))

    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="main-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
            />
            <div className="crypto-items-container">
              <div className="headings-bar-container">
                <p className="bar-texts">Coin Type</p>
                <div className="usd-euro-container">
                  <p className="usd-text">USD </p>
                  <p className="euro-text">EURO </p>
                </div>
              </div>
              <ul>
                {currencyData.map(eachItem => (
                  <CryptocurrencyItem
                    currencyItems={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
