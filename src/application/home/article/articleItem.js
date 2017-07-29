/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';

class ArticleItem extends React.Component {
    constructor(props) {
        super(props);

        this.article = props.data;
    }

    render() {
        return (
            <div>
                <h1>{this.article.title}</h1>
                <p>{this.article.content}</p>
            </div>
        )
    }
}

export default createFragmentContainer(ArticleItem,
    graphql`
        fragment articleItem on Article{
            id
            title
            slug
        }
    `)

