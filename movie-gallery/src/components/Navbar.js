import React from 'react'


const Navbar =() => {
    return (
         <React.Fragment>
            <nav className="nav-wraper indigo darken-4">
                <div className="container">
                    <a className="brand-logo " href="/">Moviegallery</a>
                    <a className="sidenav-trigger"  id="#" data-target="mobile-links">
                      <i className="material-icons">menu</i>
                   </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/discover">Discover</a></li>
                        <li><a href="/popular">Popular</a></li>
                        <li><a href="/toprated">Top rated</a></li>
 
                    </ul>  
                </div>  
                  <ul className="sidenav"  id="mobile-links">
                        <li><a href="/">Discover</a></li>
                        <li><a href="/popular">Popular</a></li>
                        <li><a href="/toprated">Top rated</a></li>
                    </ul>  
            </nav>  

        </React.Fragment>
    )
}

export default Navbar