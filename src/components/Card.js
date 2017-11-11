import React, {Component} from 'react';

class Card extends Component{
    render(){
        return(

           <main>
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

        )
    }
}

export default Card;