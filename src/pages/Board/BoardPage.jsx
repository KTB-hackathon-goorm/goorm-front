import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import DropdownMenu from '../../components/DropdownMenu';
import './BoardPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BoardPage() {
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
                <div className="container-top">
                    <div className="user-profile">
                        <img />
                        <h5>user name</h5>
                    </div>
                    <h5></h5>
                </div>

                <div className="input-container">

                </div>
            </div>
        </>
    )
}

export default BoardPage;