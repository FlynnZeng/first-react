import { createStore } from 'redux'
import countReducer from './count_reducer.js'

/**
 * 暴露 store
 */
export default createStore(countReducer)
