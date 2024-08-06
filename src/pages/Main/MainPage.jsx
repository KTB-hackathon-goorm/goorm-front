import React, { useState } from 'react';
import './MainPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    /*
    const handleSubmit = async (preference) => {
        try {
            const response = await axios.post('localhost:3000/team', { preference });
            if (response.status === 200) {
                navigate('/main');
            } else {
                console.error('전송 실패: ', response.data);
            }
        } catch (error) {
            console.error('전송 중 에러 발생: ', error);
        }
    };
    */

    return (
        <div className="container">
            <div className="info-container">
                <img />
                <div className="info-box">
                    <h5>날짜 매치해</h5>
                    <h3>파인애플 피자 호? 불호?</h3>
                </div>
            </div>
            <div classname="team-info">
                <img src="../../../public/images/harr.png" />
                <h2>Team 불호</h2>
            </div>
            <div className="map">
                지도를 그려야합니다 . . . 
            </div>
            <h3>포인트: 10000</h3>
            <div className="button-container">
                <button>게시판</button>
                <div className="record-button">
                    <img />
                    <h5>기록</h5>
                </div>
            </div>

        </div>
    )
}

export default MainPage;