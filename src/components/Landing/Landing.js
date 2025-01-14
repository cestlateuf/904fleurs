import React, { useEffect } from 'react';
import '../../styles/Landing.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo4.gif';

export default function Landing() {
    return (
        <div className="container">
            <Link to="/accueil" style={{ textDecoration: 'none' }}>
                <img src={logo} alt="Logo de 904fleurs" className="logo" />
            </Link>
        </div>
    );
}
