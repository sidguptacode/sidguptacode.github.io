import React, { useEffect, useState } from 'react';
// import roboto from '../../images/sf_img_2.png';
import roboto from '../../images/cn_tower.jpeg';
import '../styles.css'
import './localstyles.css'
import Sidebar from '../Sidebar'
import Contact from '../Contact'
import ReactGA from "react-ga4";

function HomePage () {
    
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: "/home", title: "Homepage" });
    }, []);

    return (
        <div className="pageContainer">
          <div/>
          <div className="mainSection">
            <div className="header">
              {"Welcome! 👋🏽"}
            </div>
            <div className="menuArea">
              <div className="leftInfo">
                <img className="photo" src={roboto}/>
              </div>
              <div className="rightInfo">
                <Sidebar/>
              </div>
            </div>
            <Description/>
            <div className="footer">
              <Contact/>
            </div>
          </div>
          <div/>
        </div>
    )
}

function Description () {
    return (
        <div className="description">
          {/* {"Hi! My name is Sid, and I'm a recent Computer Science graduate from the University of Toronto. Starting July 2022, I will be working at PathAI in Boston MA, on AI systems for pathology."} */}
          {"Hello! My name is Sid, and I am a machine learning engineer and researcher."}
          <br/><br/>
          {"Previously, I worked at PathAI building machine learning models for translational cancer research. Before that, I conducted research at the University of Toronto, in topics around machine learning, computer vision, & medical imaging."}
          <br/><br/>
          {"Here I share some projects that I've been a part of. These projects explain why I'm so excited about computer science and data."}
          <br/><br/>
          {"I like teaching and learning from others; I think I am pretty easy going and approachable, so feel free to reach out using the contacts below 🙂"} 
          <br/><br/>
        </div>
    );
}


export default HomePage;