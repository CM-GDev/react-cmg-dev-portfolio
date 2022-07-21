import React from 'react';

export default function Project(props) {
  return (
    <div class="card small hoverable col s12 m6">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={props.image} alt="Card"/>
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
            <p><a href={props.deploy} target="blank">Webpage Link</a></p><p><a href={props.gitHub} target="blank">GitHub Link</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
            <p>{props.description}</p>
        </div>
    </div>
  );
}