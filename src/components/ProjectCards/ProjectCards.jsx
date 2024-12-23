import React from 'react'
import "./projectcards.css"
import {Link} from "react-router-dom"
const ProjectCards = ({ topic, img, githubLink, deploymentLink, description }) => {
    return (
        <div className='pcards'>
            <div className='left'>
                <h2 style={{color:"white"}}>{topic}</h2>
                <img src={img} alt="" />
            </div>
            <div className="right">
                <p>{description}</p>
                <div className="links">
                    <Link to={githubLink}>Github Repo</Link>
                    {deploymentLink}<Link to={deploymentLink}>Project Link</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards
