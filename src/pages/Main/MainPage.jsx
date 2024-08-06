import React, { useState, useEffect } from 'react';
import './MainPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/data');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    const handleInfoClick = () => {
        navigate('/info');
    };

    const handleBoardClick = () => {
        navigate('/board');
    };

    const handleRecordClick = () => {
        navigate('/record');
    };

    const handleMapClick = () => {
        navigate('/plogging');
    };


    return (
        <div className="container">
            <div className="info-container">
                <button className='info-button' onClick={handleInfoClick}>
                    <h5>i</h5>
                </button>
                <div className="info-box">
                    <h5>2024년 8월 6일</h5>
                    <h3>파인애플 피자 호? 불호?</h3>
                </div>
            </div>
            <div className="center-container">
                <div className="team-info">
                    <img src="/images/harr.png" alt="하르" />
                    <h2>Team 불호</h2>
                </div>
                <div className="map">
                    <img src="/images/map.png" alt="지도" className="map-image" onClick={handleMapClick} />
                    <img src="/images/location.png" alt="위치 아이콘" className="location-icon" />
                </div>
                <h3 className="point">포인트: 10000</h3>
                <div className="button-container">
                    <button className="board-button" onClick={handleBoardClick}>게시판</button>
                    <button className="record-button" onClick={handleRecordClick}>
                        <img src="/images/time.png" />
                        <h5>기록</h5>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;