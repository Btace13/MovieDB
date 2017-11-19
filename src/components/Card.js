import React, {Component} from 'react';
import  axios from 'axios';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Ace'
        }
    }
    componentWillMount(){
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=ea009f1bd0f8b5df0bc7838d68828108')
            .then((response) => {
                 this.setState({title: response.data.title});
                console.log(response);
            })
            .catch(function (error) {
                alert(error);
            });
    }
    render(){
        return(
        <div>
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
            <main>
                <h1>{this.state.title}</h1>
                <div className="row">
                    <h1 className={'center'}>Howard The Duck</h1>
                    <div className="col m4 s12">
                        <img className={'responsive-img'} src="https://thedrunkenodyssey.files.wordpress.com/2015/05/howard1.jpg" alt="Howey"/>
                    </div>
                    <div className="col m8 s12">
                        <h4>You will believe that a duck can talk.</h4>
                        <p className="flow-text">A scientific experiment unknowingly brings extraterrestrial life forms to the Earth through a laser beam. First is the cigar smoking drake Howard from the duck's planet. A few kids try to keep him from the greedy scientists and help him back to his planet. But then a much less friendly being arrives through the beam...</p>
                        <div className="row">
                            <div className="col s6">
                                <h5>Original Release:</h5>
                                <p>1986-08-01</p>
                            </div>
                            <div className="col s6">
                                <h5>Running Time:</h5>
                                <p>110 mins</p>
                            </div>
                            <div className="col s6">
                                <h5>Box Office:</h5>
                                <p>$37,962,774</p>
                            </div>
                            <div className="col s6">
                                <h5>Vote Average:</h5>
                                <p>5.1 / 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        )
    }
}

export default Card;