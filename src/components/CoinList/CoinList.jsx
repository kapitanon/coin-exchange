import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
  margin: 50px auto 50 px auto;
  display: inline-block;
  font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
      const balance = this.props.showBalance ? <th>Balance</th> : '';
        return (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Ticker</th>
                { balance }
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
              this.props.coinData.map( ({name, ticker, balance, price}) =>
                <Coin key={ticker} handleRefresh={this.props.handleRefresh} 
                name={name} 
                ticker={ticker} 
                balance={balance}
                showBalance={this.props.showBalance}
                price={price} 
                />
                  )
              }
            </tbody>
          </Table>
        )
    }
}
