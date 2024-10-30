import React from "react";
import Links from "./Links"

function Renderp(props){
  return(
    <p>{props}</p>
  )
}

function BioInput(props) {
  if (props) {
    return Renderp(props)
  } else return null

}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {BioInput (props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
