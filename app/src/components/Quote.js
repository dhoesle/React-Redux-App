import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuote } from '../actions'

const Quote = ({ getQuote, quote, isFetching, error }) => {
    console.log('quote',quote)
    useEffect(() => {
        getQuote();
    },[getQuote]);

    if (isFetching) {
        return <h2>Loading...</h2>
    }

    return (
        <div className='Quote'>
            <h3>"{quote}"<br></br>-Kanye West</h3>

            <button onClick={getQuote}>One more maybe?</button>        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getQuote }
)(Quote)