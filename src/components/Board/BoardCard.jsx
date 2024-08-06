import React from 'react';
import "./BoardCard.css"

export default function BoardCard() {

    return (
        <>
            <div className='board'>
                <div className='postInfo'>
                    <img className='profileImage' src="" alt=""></img>
                    <h2 className='writer'>즐리</h2>
                    <span className='date'>2024년 8월 14일 23:00</span>
                </div>
                <img className='postImage' src="" alt=""></img>
                <span className='postText'>오 플 완</span>
            </div>
        </>
    )
}

