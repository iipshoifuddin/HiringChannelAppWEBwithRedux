import React from 'react'
import { Switch, Route } from 'react-router-dom'
//series
//import Home from './app/Home'
import Pagination from './app/Pagination'

function PagMain() {
    return (
        <Switch>
            <Route exact path='/' component={Pagination} />
            <Route path='/:id' component={Pagination} />
        </Switch>
    );
}

export default PagMain
