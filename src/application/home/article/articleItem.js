"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.data.title || "article's title here",
            content: props.data.content || "article's content here",
            slug: props.data.slug
        }
    }

    render() {
        return (
            <div>
                <h1><Link to={'/article/' + this.state.slug}>{this.state.title}</Link></h1>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default createFragmentContainer(ArticleItem,
    graphql`
        fragment articleItem on Article{
            id
            title
            content
            slug
        }`
)

