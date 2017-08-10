"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {QueryRenderer, graphql} from 'react-relay';
import modernEnvironment from '../env';
import Sidebar from './sidebar';
import ArticleList from './article/articleList';
import ArticleDetail from './article/articleDetail';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QueryRenderer
                environment={modernEnvironment}
                query={
                    graphql`
                      query homeQuery($sort:String,$limit:Int) {
                        articles(sort:$sort,limit:$limit){
                            ...articleList
                        }
                      }`
                }
                variables={{
                    sort: "updatedAt",
                    limit: 10,
                }}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return (
                            <div className="home-wrapper">
                                <Route exact path="/" render={() => <ArticleList data={props.articles}/>}/>
                                <Route path="/article/:slug" component={ArticleDetail}/>
                                <Sidebar/>
                            </div>
                        );
                    } else {
                        return <div>Loading</div>
                    }
                }}
            />
        )
    };
}


export default Home;