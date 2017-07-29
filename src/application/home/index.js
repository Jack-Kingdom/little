/**
 * Created by Jack on 4/20/2017.
 */

import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import modernEnvironment from '../env'
import Sidebar from './sidebar'
import ArticleList from './article/articleList'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QueryRenderer
                environment={modernEnvironment}
                query={
                    graphql`
                      query homeQuery {
                        articles{
                            ...articleItem
                        }
                      }
                `
                }
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        console.log(props.articles);
                        return (
                            <ArticleList articles={props.articles}/>
                        );
                    } else {
                        return <div>Loading</div>
                    }
                }}
            />
        )
    }
}


export default Home;