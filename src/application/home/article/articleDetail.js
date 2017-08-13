"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';
import modernEnvironment from '../../env';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        };

    }

    render() {
        return (
            <QueryRenderer
                environment={modernEnvironment}
                query={
                    graphql`
                      query articleDetailQuery($id:ID!) {
                        article(id:$id){
                            id
                            slug
                            title
                            createdAt
                            updatedAt
                            renderedContent
                        }
                      }`
                }
                variables={{
                    id: this.state.id,
                }}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        let article = props.article;
                        return (
                            <div className="article-wrapper">
                                <h1 style={{}}>{article.title}</h1>
                                <div>{article.renderedContent}</div>
                            </div>
                        );
                    } else {
                        return <div>Loading</div>;
                    }
                }}
            />
        );
    }
}

export default ArticleDetail;
