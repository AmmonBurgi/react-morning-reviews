import React from 'react' 

function ListItem(props){
    console.log(props)
    return( 
        <div className='List-Item'>
            <img alt={props.movie.title} className='movie-poster' src={props.movie.posterImage}/>
            <div className='movie-info'>
            <p>{props.movie.title}</p>
            <p>{props.movie.year}</p>
            </div>
        </div>
    )
}
export default ListItem