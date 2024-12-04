import React, {useEffect} from 'react';
import video from '../../assets/videos/landing_video.mp4';
import '../../styles/Landing.css';
import { Link } from 'react-router-dom';

export default function Landing() {
    useEffect(() => {
        // Ajouter une classe "landing-page" au body uniquement sur cette page
        document.body.classList.add('landing-page');
        return () => {
            // Supprimer la classe lors de la sortie de la page
            document.body.classList.remove('landing-page');
        };
    }, []);
    return (
        <div className="container">
            <Link to="/accueil" style={{ textDecoration: 'none' }}>
            <div className='vignette'>
                <div className='video'>
                    <video src={video} autoPlay loop muted playsInline />
                </div>
                <div className='title-landing'>
                    <h1>904fleurs</h1>
                </div>
                </div>
            </Link>
        </div>
    );
}
