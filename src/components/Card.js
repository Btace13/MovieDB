import React, {Component} from 'react';
import  axios from 'axios';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieId: '120',
            title: 'Loading..',
            tagline: 'Loading..',
            overview: 'Loading..',
            runtime: 'Loading..',
            release_date: 'Loading..',
            revenue: 'Loading..',
            vote: 'Loading..'

        }
    }
    fetchApi(url) {

        axios.get(url)
            .then((response) => {
                this.setState({
                    title: response.data.title,
                    tagline: response.data.tagline,
                    overview:response.data.overview,
                    runtime: response.data.runtime,
                    release_date: response.data.release_date,
                    revenue: response.data.revenue,
                    vote: response.data.vote_average,
                    backdrop: "https://image.tmdb.org/t/p/w500"+response.data.poster_path
                });

                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    fetchMovieID(movieId) {
        let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ea009f1bd0f8b5df0bc7838d68828108`;
        this.fetchApi(url)
    } // end function
    componentWillMount(){

    }
    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/${this.state.movieId}?api_key=ea009f1bd0f8b5df0bc7838d68828108`;
        this.fetchApi(url);
    }
    render(){
        return(
        <div>
            <header>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={''} id="lookUp" type="text" className="validate" placeholder={'Movie Name'}/>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
            <main>
                <div className="row">
                    <h1 className={'center'}>{this.state.title}</h1>
                    <div className="col m5 s12">
                        <img className={'responsive-img'} src={this.state.backdrop} alt="Loading.."/>
                    </div>
                    <div className="col m7 s12">
                        <h4>{this.state.tagline}</h4>
                        <p className="flow-text">{this.state.overview}</p>
                        <div className="row">
                            <div className="col s6">
                                <h5>Original Release:</h5>
                                <p>{this.state.release_date}</p>
                            </div>
                            <div className="col s6">
                                <h5>Running Time:</h5>
                                <p>{this.state.runtime} mins</p>
                            </div>
                            <div className="col s6">
                                <h5>Box Office:</h5>
                                <p>${this.state.revenue}</p>
                            </div>
                            <div className="col s6">
                                <h5>Vote Average:</h5>
                                <p>{this.state.vote} / 10</p>
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