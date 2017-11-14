import React from 'react';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id
        };
    }

    render() {
        let article = props.article;
        return (
            <div className='article-wrapper'>
                <h1 style={{}}>{article.title}</h1>
                <div>{article.renderedContent}</div>
            </div>
        )
    }
}

export default ArticleDetail
