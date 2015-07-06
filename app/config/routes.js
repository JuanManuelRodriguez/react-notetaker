var React = require('react'),
    Main = require('../components/Main'),
    Home = require('../components/Home'),
    Profile = require('../components/Profile'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);
