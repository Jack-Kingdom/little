"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';
import modernEnvironment from '../../env';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        const slug = props.match.params.slug;

    }

    render() {
        return (
            <QueryRenderer
                environment={modernEnvironment}
                query={
                    graphql`
                      query articleDetailQuery($slug:String!) {
                        article(slug:$slug){
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
                            </div>
                        );
                    } else {
                        return <div>Loading</div>
                    }
                }}
            />
        );
    }
}

export default ArticleDetail;