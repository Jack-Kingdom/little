"use strict";

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Relay, {QueryRenderer, graphql, createFragmentContainer} from 'react-relay';

class articleDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: props.match.params.slug
        };
    }

    // todo: query with slug rather than id
    render() {
        return (
            <div>
                This is detail page, slug:{this.state.slug}
            </div>
        );
    }
}

export default articleDetail;