import { combineReducers } from 'redux'
import portfolio from './portfolio'
import codepen from './codepen'
import blogPost from './blogsPost'

const rootReducer = combineReducers({
  portfolio,
  codepen,
  blogPost
})

export default rootReducer
