import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItems} = props
  const {euroValue, usdValue, currencyLogo, currencyName} = currencyItems
  return (
    <li className="currency-item-container">
      <div className="logo-name-container">
        <img className="logo-img" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{{currencyName}}</p>
      </div>
      <div className="usd-euro-container">
        <p className="usd-val">{usdValue}</p>
        <p className="euro-val">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
