import React, { useState } from 'react';
import './QuestionPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuestionPage() {
    const navigate = useNavigate();

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

    return (
        <>
            <div className="container">
                <div className="text-container">
                    <h1>오늘의 질문</h1>
                    <h2>파인애플 피자 호? 불호?</h2>
                </div>
                <div className="button-container">
                    <div className="left-button" onClick={() => handleSubmit(true)}>
                        <img src="../../../images/bong.png" alt="봉이"/>
                        <h3>호</h3>
                    </div>
                    <div className="right-button" onClick={() => handleSubmit(false)}>
                        <img src="../../../images/harr.png" alt="하르" />
                        <h3>불호</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionPage;