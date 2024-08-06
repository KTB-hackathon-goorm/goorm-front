import React, { useState } from 'react';
import './InfoPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InfoPage() {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate('/main');
    }

    return (
        <div className="infopage-container">
            <div className="exit-button" onClick={handleExit}>
                <img src="/images/out.png" alt="Exit" />
            </div>

            <div className="info-container">
                <h1>플로깅(줍깅)이란?</h1>
                <img src="/images/info.png" alt="Info" />
                <p>‘이삭을 줍는다'는 뜻인 스웨덴어 plocka upp과 영어 단어 jogging(조깅)의 합성어로, 조깅하면서 쓰레기를 줍는 행동을 말합니다. 
                    2016년 스웨덴에서 처음 시작해 북유럽을 중심으로 확산되다가, 현재는 국내를 비롯하여 전 세계적 운동 트렌드로 자리잡고 있습니다. 
                    우리말로는 줍깅이라고 합니다. 
                    <br /> 
                    <br />
                    <br />
                    거리에 버려진 쓰레기를 최대한 많이 주우면서 목적지까지 가벼운 조깅으로 가는 것이 목적이기 때문에 조깅하는 시간을 고려하여 
                    필요한 쓰레기 봉투와 장갑, 집게 등을 챙겨가는 것이 좋습니다. 
                    <br />
                    <br />
                    <br />
                    국내에서는 2018년 한강을 중심으로 줍깅 운동회가 열렸고, 플로깅에 대한 인식이 생기기 시작하면서 점차 확산되었습니다. 
                    플로깅(plogging) 자세는 스쿼트나 런지 운동 자세와 비슷하여 칼로리 소모량이 일반 조깅보다 약 50kcal를 더 
                    소모한다는 연구 결과가 발표되기도 했습니다. 
                </p>
            </div>
        </div>
    )
}

export default InfoPage;