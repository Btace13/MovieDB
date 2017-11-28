import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(

            <nav>
                <div className="nav-wrapper navbar-fixed">
                    <a href="" className="brand-logo">Movie Search</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://www.themoviedb.org/?language=en" target={'_blank'}>Source</a></li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;