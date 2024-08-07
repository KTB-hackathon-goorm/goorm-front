import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import DropdownMenu from '../../components/DropdownMenu';
import './BoardPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BoardCard from '../../components/Board/BoardCard';

function BoardPage() {
    const navigate = useNavigate();
    const dummyData = [
        { profileImages: "/images/profile1.png", writer: "즐리", date: "2024년 8월 7일 06:11", postImages: "https://www.hartzpt.com/wp-content/uploads/2018/07/plogging-stock-photo-webcrop.jpg", postText: "오플완!" },
        { profileImages: "/images/profile2.png", writer: "노아", date: "2024년 8월 7일 04:23", postImages: "https://impakter.com/wp-content/uploads/2021/10/PSX_20210623_091218-scaled.jpg", postText: "쓰레기통 저깄다!" },
        { profileImages: "/images/profile3.png", writer: "홍", date: "2024년 8월 7일 02:24", postImages: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6an43L_LtEp7cOZR1TaAT6ndYS91fS1eIyw&s", postText: "아오 빡세" },
        { profileImages: "/images/profile1.png", writer: "파즈", date: "2024년 8월 7일 01:09", postImages: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2022-04/e39931ebd515c86d7aac7b720581897dplogging-istock-garbage-pick-up.jpg", postText: "플로깅 안하면 쓰레기" },
        { profileImages: "/images/profile2.png", writer: "미아", date: "2024년 8월 7일 22:12", postImages: "https://static.euronews.com/articles/stories/03/67/00/70/1200x675_cmsv2_28f729ee-78d9-52f9-a080-1377014feadd-3670070.jpg", postText: "오플완~" },
        { profileImages: "/images/profile3.png", writer: "보이드", date: "2024년 8월 7일 19:23", postImages: "https://lbcleanup.com/images/blog-plogging.jpg", postText: "덥다" },
        { profileImages: "/images/profile3.png", writer: "제프", date: "2024년 8월 6일 18:34", postImages: "https://familyapp.com/wp-content/uploads/2021/07/father_son_plogging.jpg", postText: "끝" },
        { profileImages: "/images/profile1.png", writer: "로건", date: "2024년 8월 6일 17:37", postImages: "https://image.utoimage.com/preview/cp872722/2022/09/202209009449_500.jpg", postText: "오플완" },
        { profileImages: "/images/profile3.png", writer: "소피아", date: "2024년 8월 6일 15:03", postImages: "https://image.utoimage.com/preview/cp872722/2022/09/202209014660_500.jpg", postText: "ㅇㅍㅇ" },
        { profileImages: "/images/profile2.png", writer: "모노", date: "2024년 8월 6일 12:30", postImages: "https://miro.medium.com/v2/resize:fit:960/1*O6qH4PBYr-u1VWbTdLcdJA.jpeg", postText: "ㅇㅍㅇ~~~" },
    ]

    return (
        <div className="boardPage">
            {dummyData.map((post, index) => (
                <BoardCard
                    key={index}
                    profileImage={post.profileImages}
                    writer={post.writer}
                    date={post.date}
                    postImage={post.postImages}
                    postText={post.postText}
                />
            ))}
        </div>
    )
}

export default BoardPage;