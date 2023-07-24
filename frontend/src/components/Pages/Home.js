import React, { Fragment } from "react";
import '../../App.css';
import video from "../../videos/smoke1.mp4"

export default function Home() {
  return (
    <Fragment>
      <div className="bg1">
        <section>
          <video src= {video} autoPlay muted></video>
          <h1 className="insection">
            <span>E</span>
            <span>L</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>R</span>
            <span>I</span>
            <span>C</span>
            <span>A</span>
            <span>L</span>
            <span className="letterE">E</span>
            <span>N</span>
            <span>G</span>
            <span className="letterG">G</span>
            <span>D</span>
            <span>E</span>
            <span>P</span>
            <span>T</span>
          </h1>
        </section>
      </div>
      <div className="bg2">
        <h1 className='home'>Electrical Engg Department</h1>
      </div>
    </Fragment>
  )
}