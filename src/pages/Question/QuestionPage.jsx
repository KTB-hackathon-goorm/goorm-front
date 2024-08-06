import React, { useState } from 'react';
import './QuestionPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
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
                <div className="input-container">
                    <form onSubmit={handleSubmit}>
                        <h2>로그인</h2>
                        <input
                            type="email"
                            placeholder="이메일"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type='submit'
                        >로그인</button>
                    </form>
                </div>
            </div>
        
        </>
    )
}

export default LoginPage;