/**
 * Created by Jack on 4/4/2017.
 */

import React from 'react';
import ArticleItem from './articleItem'

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.articles = props.articles;
    }

    render() {
        return (
            <div>
                {this.articles.map((article) => <ArticleItem key={article.__id} data={article}/>)}
            </div>
        )
    }
}

export default ArticleList;