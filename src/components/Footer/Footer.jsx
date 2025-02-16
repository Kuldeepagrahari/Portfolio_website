import React from 'react'
import "./footer.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"
import { RiUserFollowLine } from "react-icons/ri";
const Footer = () => {
    return (
        <div className='footer'>
            <h2><RiUserFollowLine /><br />follow me </h2>
            <div className="links">
            <Link to="https://github.com/Kuldeepagrahari">
                <FaGithubSquare style={{ fontSize: "50px", color: "white" }} /></Link>  <Link to="">
                <FaInstagramSquare style={{ fontSize: "50px", color: "white" }} /></Link>  <Link to="https://x.com/kuldeep_106"><FaSquareXTwitter style={{fontSize: "50px", color: "white" }} /></Link>  <Link to="https://www.linkedin.com/in/kuldeep-agrahari-56b159260">
                <FaLinkedin style={{ fontSize: "50px", color: "white" }} /></Link>
        </div></div>
    )
}

export default Footer
