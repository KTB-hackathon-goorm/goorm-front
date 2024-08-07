import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate('/main');
    }

    return (
        <>
            <div className="header" onClick={handleLogoClick}>
                <h1>BONGGU</h1>
            </div>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
        </>
    );

}

export default Header;