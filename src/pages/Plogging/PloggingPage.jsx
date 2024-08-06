import React, {useRef} from "react";

import "./PloggingPage.css";
import KakaoMap from "../../components/Map/Map";
import Timer from "../../components/Map/Timer";

export default function PloggingPage() {

    const timeRef = useRef(null);

    const handleFinish = () => {
        if(timeRef.current) {
            const time = timeRef.current.getTime();
            const totalMinutes = time.hour * 60 + time.min + Math.floor(time.sec / 60);
            const quotient = Math.floor(totalMinutes/10);
            console.log(quotient);
        }
    }

    return (
        <>
            <div className="map">
                <KakaoMap />
                <div className="timer">
                    <img style={{width: "50px", height: "50px", marginRight: "40px"}} src="/images/Runner.png"/>
                    <Timer ref={timeRef}/>
                    <img style={{width: "50px", height: "50px", marginLeft: "40px"}} src="/images/TrashBag.png" />
                </div>
                <button className="finish" onClick={handleFinish}>끝내기</button>
            </div>
        </>
    )
}