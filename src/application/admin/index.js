/**
 * Created by Jack on 4/20/2017.
 */

import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Editor from './editor';
import Media from './media';
import Auth from './auth';

class Admin extends React.Component {
    render() {
        return (
            <div className="admin-wrapper">
                <Auth/>
            </div>
        )
    }
}

export default Admin;