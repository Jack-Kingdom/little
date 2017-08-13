"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';
import ArticleDetail from './articleDetail';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: props.data
        };
    }

    render() {
        return (
            <div className="article-list">
                {this.state.articles.map((article) => (
                    <div key={article.id}>
                        <h1><Link to={"/article/" + article.id}>{article.title}</Link></h1>
                        {/* todo perfect content */}
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}


export default createFragmentContainer(ArticleList,
    graphql`
        fragment articleList on Article @relay(plural: true){
            id
            slug
            title
            content
        }
    `
);

