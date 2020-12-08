import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Discover_API = "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=a87b0d8312b2607eead7733f9b32be5e/"
const img_API ="https://image.tmdb.org/t/p/w500" 


const Movie =(props) =>{
    const [movie, setMovie] = useState(null)

    useEffect(() =>{
        let id = props.match.params.movie_id
        axios.get(Discover_API + id)
        .then(res =>{
            setMovie(res.data.result)
            console.log(res)
        })
    })

     const movieToRender = movie ?(
         <div className="col s12 l10 offset-l1">
           <div className="card">
              <div className="card-content">
                 <span className="title">{movie.title}</span>
                 <p>{movie.overview}</p>
              </div>
         </div>
         </div>

     ) :(<div className="center">Loading....</div>)

    return (
        <div className="container">
            <div className="row">
                {movieToRender}
            </div>
        </div>
    )
}

export default Movie
