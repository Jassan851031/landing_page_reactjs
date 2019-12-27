import React from 'react';


const Jumbotron = (props) => {
    return (
        <div class="jumbotron">
            <h1 class="display-4">{props.title}</h1>
            <p class="lead">{props.text}</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">{props.btn}</a>
        </div>
    );
}



export default Jumbotron;