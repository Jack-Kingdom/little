"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';

class articleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
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

// export default articleDetail;

export default createFragmentContainer(articleDetail,
    graphql`
        fragment articleDetail on Article{
            id
            title
            renderedContent
        }
    `
);