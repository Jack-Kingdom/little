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
                      query homeQuery($sort:String,$limit:Int) {
                        articles(sort:$sort,limit:$limit){
                            ...articleItem
                        }
                      }
                `
                }
                variables={{
                    sort: "updatedAt",
                    limit: 10,
                }}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return (
                            <div className="home-wrapper">
                                <ArticleList articles={props.articles}/>
                                <Sidebar/>
                            </div>
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