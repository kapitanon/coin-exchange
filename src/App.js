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
<<<<<<< HEAD
          price: 9999.99,
          balance: 1,
=======
          balance: 1,
          price: 9999.99,
>>>>>>> hide
      },
      {
        name: "Ethereum",
        ticker: 'ETH',
<<<<<<< HEAD
        price: 299.99,
        balance: 32,
=======
        balance: 32,
        price: 299.99,
>>>>>>> hide
      },
      {
        name: "Tether",
        ticker: 'USDT',
<<<<<<< HEAD
        price: 1.00,
        balance: 0,
=======
        balance: 0,
        price: 1.00,
>>>>>>> hide
      },
      {
        name: "Ripple",
        ticker: 'XRP',
<<<<<<< HEAD
        price: .25,
        balance: 1000,
=======
        balance: 1000,
        price: .25,
>>>>>>> hide
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
<<<<<<< HEAD
        price: 297.99,
        balance: 0,
=======
        balance: 0,
        price: 297.99,
>>>>>>> hide
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

<<<<<<< HEAD
    handleBalance(){
      this.setState({ showBalance: !this.state.showBalance });
    }


=======
    handleBalance() {
      this.setState({
        showBalance: !this.state.showBalance
      });
    }

>>>>>>> hide
  render() {
    return (
      <Div>
        <ExchangeHeader />
<<<<<<< HEAD
        < AccountBalance 
            amount={this.state.balance} 
            showBalance={this.state.showBalance}
            handleBalance={this.handleBalance}
        />
        <CoinList 
            coinData={this.state.coinData} 
            handleRefresh={this.handleRefresh} 
            showBalance={this.state.showBalance}
          />
=======
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance}
          handleBalance={this.handleBalance}
          />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh} 
          showBalance={this.state.showBalance}/>
>>>>>>> hide
      </Div>
    );
  }
}

export default App;
