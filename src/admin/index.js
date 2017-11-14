import React from 'react';
import ReactDOM from 'react-dom';

// import Editor from './editor'

class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };

        this.onCollapse = this.onCollapse.bind(this);
    }

    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <h1> admin page</h1>
        )
    }
}

ReactDOM.render(
    <Admin/>,
    document.getElementById('app')
);
