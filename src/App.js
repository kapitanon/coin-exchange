import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import ExchangeHeader from './components/ExchangeHeader';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
    background-color: rgb(20, 56, 97);
    color: #cccccc;
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      showBalance: false,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 1,
          price: 9999.99,
      },
      {
        name: "Ethereum",
        ticker: 'ETH',
        balance: 32,
        price: 299.99,
      },
      {
        name: "Tether",
        ticker: 'USDT',
        balance: 0,
        price: 1.00,
      },
      {
        name: "Ripple",
        ticker: 'XRP',
        balance: 1000,
        price: .25,
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 297.99,
      }
    ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleBalance = this.handleBalance.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function( {ticker, name, price}) {
      let newPrice = price;
      if( valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * .01;
        newPrice = newPrice * randomPercentage;
            }
            return {
              ticker,
              name, 
              price: newPrice
            }
        }); 
        this.setState({ coinData: newCoinData });
    }

    handleBalance() {
      this.setState({
        showBalance: !this.state.showBalance
      });
    }

  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance}
          handleBalance={this.handleBalance}
          />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh} 
          showBalance={this.state.showBalance}/>
      </Div>
    );
  }
}

export default App;
