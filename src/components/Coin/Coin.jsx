import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CoinRow = styled.td`
border: 1px solid #cccccc;
width: 25vh;
`;

export default class Coin extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        //prevent the default action of submitting the form
        event.preventDefault();

        this.props.handleRefresh(this.props.ticker);

        /*
        const randomPercentage = 0.995 + Math.random() * .01;
        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        }); */
    }

    render() {
<<<<<<< HEAD
        const showBal = this.props.showBalance ? <span> <CoinRow>{this.props.balance}</CoinRow> </span> : '';
=======
    const balance = this.props.showBalance ? <><CoinRow>{this.props.balance}</CoinRow></> : '';
>>>>>>> hide
        return (
            <tr>
                <CoinRow>{this.props.name}</CoinRow>
                <CoinRow>{this.props.ticker}</CoinRow>
<<<<<<< HEAD
                { showBal }
=======
                { balance }
>>>>>>> hide
                <CoinRow>${this.props.price}</CoinRow>
                <CoinRow> <form action="#" method="POST" >
                    <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </CoinRow>
            </tr>
        );
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}