import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Container(props) {
    console.log(props);
    return (
    <div className="container">
    <div className="row">
      <div className="col linkCard">
        <a href={props.project.link} target="_blank" rel="noreferrer"><h1>{props.project.nameofProject}</h1></a>
        <a href={props.project.repo} target="_blank" rel="noreferrer">Repository</a>
      </div>
    </div>
    </div>
    )
};

export default Container;