import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(

            <header>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" className="validate" placeholder={'Movie Name'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </header>

        )
    }
}

export default Header;