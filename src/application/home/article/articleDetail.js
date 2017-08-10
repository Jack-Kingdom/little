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
        }

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
                            renderedContent
                        }
                      }`
                }
                variables={{
                    id: this.state.id,
                }}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return (
                            <div className="article-wrapper">
                                this is detail page
                                {props.article.slug}
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

// class XXOO extends QueryRenderer {
//     constructor(props)
// }

export default ArticleDetail;