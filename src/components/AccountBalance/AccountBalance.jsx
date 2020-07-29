import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Section = styled.section`
font-size: 2rem;
text-align: left;
padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    
    render() {
<<<<<<< HEAD
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let showBal = this.props.showBalance ? <span> AccountBalance: ${this.props.amount}</span> : ''; 
        return (
            < Section >
            { showBal }
        <button onClick={this.props.handleBalance}>{buttonText}</button>
            </ Section >
=======
        let showBal = this.props.showBalance ? <>AccountBalance: ${this.props.amount}</> : '';
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
            <Section>
                { showBal }
         < button onClick={this.props.handleBalance} >{buttonText}</button> 
            </Section>
>>>>>>> hide
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}