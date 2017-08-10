"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    // todo: query with slug rather than id
    render() {
        return (
            <div>
                This is detail page
            </div>
        );
    }
}

export default ArticleDetail;

// export default createFragmentContainer(ArticleDetail,
//     graphql`
//         fragment articleDetail on Article{
//             id
//             title
//             renderedContent
//         }
//     `
// );