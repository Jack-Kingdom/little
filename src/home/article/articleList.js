import React from 'react';
import {Link} from 'react-router-dom';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('/api/rest/articles', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

    }

    render() {
        return (
            <div className='article-list'>
                {this.state.articles.map((article) => (
                    <div key={article.slug}>
                        <h1><Link to={'/article/' + article.slug}>{article.title}</Link></h1>
                        {/* todo perfect content */}
                        <p>{article.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ArticleList;