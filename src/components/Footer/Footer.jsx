import React from 'react'
import "./footer.css"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className='footer'>
            <h2>follow me</h2>
            <Link to="https://github.com/Kuldeepagrahari">
                <FaGithubSquare style={{ boxShadow: "1px 1px 15px var(--theme-color)", border: "1px solid var(--theme-color)", fontSize: "30px", color: "white" }} /></Link>  <Link to="">
                <FaInstagramSquare style={{ boxShadow: "1px 1px 15px var(--theme-color)", border: "1px solid var(--theme-color)", fontSize: "30px", color: "white" }} /></Link>  <Link to="https://x.com/kuldeep_106"><FaSquareXTwitter style={{ boxShadow: "1px 1px 15px var(--theme-color)", border: "1px solid var(--theme-color)", fontSize: "30px", color: "white" }} /></Link>  <Link to="https://www.linkedin.com/in/kuldeep-agrahari-56b159260">
                <FaLinkedin style={{ boxShadow: "1px 1px 15px var(--theme-color)", border: "1px solid var(--theme-color)", fontSize: "30px", color: "white" }} /></Link>
        </div>
    )
}

export default Footer
