"use strict";

import React from 'react';

class Media extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form method="post" enctype="multipart/form-data" action="/api/media/upload">
                <input type="hidden" name="msgtype" value="2"/>
                <input type="file" name="media"/>
                <input type="submit" value="Upload"/>
            </form>
        )
    }
}

export default Media;