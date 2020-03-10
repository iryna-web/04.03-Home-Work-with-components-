import React from 'react';
import { Fragment } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import List from './componets/test.component/componentlist'






const App = () => {
    return (
        <div className='container'>
            <Fragment>
                <h1>Contact App</h1>
            </Fragment>
            <List />
        </div>

    );
};



ReactDOM.render(<App />, document.getElementById('root'));

