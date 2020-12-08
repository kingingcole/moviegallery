import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import  Discover from './Discover'
import Movie from './Movie'


function  Moviegallery() {
    return (
        <BrowserRouter>
            <div>
              <Navbar/>
                  <Switch>
                     <Route exact path='/' component={Discover} />
                     <Route exact path='/:movie_id' component={Movie} />
                  </Switch>
             </div>


      </BrowserRouter>

    )
}

export default  Moviegallery