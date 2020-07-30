import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
border: 1px solid #cccccc;
width: 25vh;
`;

export default class Coin extends Component {

    handleClick = (event) => {
        //prevent the default action of submitting the form
        event.preventDefault();
        
        this.props.handleRefresh(this.props.ticker);
    }

    render() {
    const balance = this.props.showBalance ? <> <CoinRow> {this.props.balance} </CoinRow> </> : '';
        return (
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
                {balance}
                <CoinRow>${this.props.price}</CoinRow>
                <CoinRow> <form action="#" method="POST" ><button onClick={this.handleClick}>Refresh</button></form></CoinRow></tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}