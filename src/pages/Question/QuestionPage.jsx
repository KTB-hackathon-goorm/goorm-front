import React, { useState } from 'react';
import './QuestionPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuestionPage() {
    const navigate = useNavigate();

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { email, password });
            if (response.status === 200) {
                navigate('/question');
            } else {
                console.error('로그인 실패!!!', response.data);
                alert("로그인에 실패하였습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            console.error('로그인 중 에러 발생: ', error);
        }
    }*/

    return (
        <>
            <div className="container">
                <div className="text-container">
                    <h1>오늘의 질문</h1>
                    <h2>파인애플 피자 호? 불호?</h2>
                </div>
                <div className="button-container">
                    <div className="left-button">
                        <img src="../../../images/bong.png" alt="봉이"/>
                        <h3>호</h3>
                    </div>
                    <div className="right-button">
                        <img src="../../../images/harr.png" alt="하르" />
                        <h3>불호</h3>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default QuestionPage;