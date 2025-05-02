import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActorList from './components/ActorList';
import ActorForm from './components/ActorForm';
import ActorDetails from './components/ActorDetails';
import './styles/style.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <h1>Sakila Actor CRUD</h1>
                <Switch>
                    <Route path="/" exact component={ActorList} />
                    <Route path="/add" component={ActorForm} />
                    <Route path="/actor/:id" component={ActorDetails} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;