import React from 'react'
import { Switch, Route } from 'react-router-dom'
//series
import Home from './components/app/Home'
//import DetailData from './components/app/DetailData'
//import Pagination from './components/app/Pagination'
//single
//import SingleDisplay from './pages/SingleDisplay'

function Main() {
    return (
        <>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/:id' component={Home} />
            
        </Switch>
           {/* <Switch>
                <Route exact path='/' component={DetailData} />
                <Route path='/detail/:id' component={DetailData} />
           </Switch>*/}
        </>
    );

    //<Route path='/display/:id' component={SingleDisplay} />
}

export default Main