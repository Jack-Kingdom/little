import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from './sidebar';
import ArticleList from './article/articleList';
import ArticleDetail from './article/articleDetail';

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='home-wrapper'>
                    <Route exact path='/' component={ArticleList}/>
                    <Route path='/article/:id' component={ArticleDetail}/>
                    <Sidebar/>
                </div>
            </BrowserRouter>
        )
    };
}

ReactDOM.render(
    <Home/>,
    document.getElementById('app')
);
