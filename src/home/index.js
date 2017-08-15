import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { QueryRenderer, graphql } from 'react-relay'
import modernEnvironment from '../env/index'
import Sidebar from './sidebar'
import ArticleList from './article/articleList'
import ArticleDetail from './article/articleDetail'

class Home extends React.Component {
  render () {
    return (
      <QueryRenderer
        environment={modernEnvironment}
        query={
          graphql`
            query homeQuery($order:String,$offset:Int,$limit:Int) {
              articles(order:$order,offset:$offset,limit:$limit){
               ...articleList
              }
            }`
        }
        variables={{
          order: 'updatedAt',
          offset: 0,
          limit: 10
        }}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <BrowserRouter>
                <div className='home-wrapper'>
                  <Route exact path='/' render={() => <ArticleList data={props.articles}/>}/>
                  <Route path='/article/:id' component={ArticleDetail}/>
                  <Sidebar/>
                </div>
              </BrowserRouter>

            )
          } else {
            return <div>Loading</div>
          }
        }}
      />
    )
  };
}

ReactDOM.render(
  <Home/>,
  document.getElementById('app')
)

