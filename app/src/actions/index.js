import axios from 'axios'

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START'
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS'
export const FETCHING_QUOTE_FAILURE= 'FETCHING_QUOTE_FAILURE'

const headers = {
    Accept: 'application/json'
}

export const getQuote = () => dispatch => {
    dispatch({ type: FETCHING_QUOTE_START });
    axios
        .get('https://api.kanye.rest', { headers })
        .then(res => {
            console.log('getquote',res.data.quote)
            dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote })
        })
        .catch(err => {
            console.log('getquote error', err)
            dispatch({
                type: FETCHING_QUOTE_FAILURE,
                payload: err.response.message
            })
        })
}
