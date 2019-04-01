import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './LayoutContainer.scss';

class LayoutContainer extends Component {
    state = {
    }

    render() {
        return (
            <div className={ classes.LayoutContainer }>
            </div>
        )
    }
};

export default LayoutContainer;