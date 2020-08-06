import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Section = styled.section`
font-size: 2rem;
text-align: left;
padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {
        let showBal = props.showBalance ? <>AccountBalance: ${props.amount}</> : '';
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
            <Section>
                { showBal }
                <button onClick={props.handleBalance}> 
                    {buttonText} 
                </button> 
            </Section>
        );
    }


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}