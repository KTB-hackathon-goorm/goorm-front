import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./PloggingPage.css";
import KakaoMap from "../../components/Map/Map";
import Timer from "../../components/Map/Timer";
import { Box, Button, Typography, Modal } from "@mui/material";

export default function PloggingPage() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const timeRef = useRef(null);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleFinish = () => {
        if (timeRef.current) {
            const time = timeRef.current.getTime();
            const totalMinutes = time.hour * 60 + time.min + Math.floor(time.sec / 60);
            const quotient = Math.floor(totalMinutes / 10);
            console.log(quotient);
            navigate('/post');
        }
    }

    return (
        <div className="container">
            <div className="map">
                <KakaoMap />
                <div className="timer">
                    <img style={{ width: "50px", height: "50px", marginRight: "40px" }} src="/images/Runner.png" alt="Runner" />
                    <Timer ref={timeRef} />
                    <img style={{ width: "50px", height: "50px", marginLeft: "40px" }} src="/images/TrashBag.png" alt="TrashBag" />
                </div>
                <button className="finish" onClick={handleOpen}>끝내기</button>
                <Modal className="finishModal" open={isOpen} onClose={handleClose}>
                    <Box className="finishModal">
                        <Typography id="finishModlaTitle" variant="h6" component="h2">플로깅이 끝나셨나요?</Typography>
                        <Button onClick={handleFinish}>네!</Button>
                        <Button onClick={handleClose}>아니오!</Button>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}