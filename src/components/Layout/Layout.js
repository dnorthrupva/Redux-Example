import React from 'react';
import AppBar from '../UI/AppBar/AppBar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Characters from '../Characters/Characters';
import { Route, Switch } from 'react-router-dom';
import Test from '../Test_DNU/Test';

const divStyle = {
    maxWidth: '100%'
};
const mapStateToProps = state => {
    return { user: state.user, characters: state.characters };
}
const container = (
    withRouter,
    connect(mapStateToProps)
)

const Layout = (props) => {
    return (
        <div stlye={divStyle}>
            <AppBar {...props} />
            <Switch>
                <Route path="/characters" component={Characters} />
                <Route path="/test" exact component={Test} />
            </Switch>
        </div>
    );
};
const EnhancedLayout = container(Layout);
export default EnhancedLayout