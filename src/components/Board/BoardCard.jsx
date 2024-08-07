import React from 'react';
import "./BoardCard.css"

export default function BoardCard({ profileImage, writer, date, postImage, postText }) {
    return (
        <div className='board'>
            <div className='postInfo'>
            <img className='profileImage' src={profileImage} alt="Profile" />
                <h2 className='writer'>{writer}</h2>
                <span className='date'>{date}</span>
            </div>
            <img className='postImage' src={postImage} alt="Post" />
            <span className='postText'>{postText}</span>
        </div>
    )
}

