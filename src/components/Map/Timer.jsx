import React, {useEffect, useState, useRef, useImperativeHandle, forwardRef} from "react";

function Timer(props, ref) {
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const time = useRef(0);
    const cron = useRef(null);

    useEffect(()=>{
        start();
        return () => clearInterval(cron.current);
    },[])

    const start = () => {
        updateTimer();
        cron.current = setInterval(updateTimer, 1000);
    };

    const updateTimer = () => {
        const temp = time.current;
        const hours = Math.floor(temp/3600);
        const mins = Math.floor((temp%3600)/60);
        const secs = temp % 60;
        setHour(hours);
        setMin(mins);
        setSec(secs);
        time.current+=1;
    }

    useImperativeHandle(ref, () => ({
        getTime: () => {
            return { hour, min, sec };
        }
    }));

    return(
        <>
        <h1>
            {hour<10 ? `0${hour}`:hour}:
            {min<10 ? `0${min}`:min}:
            {sec<10 ? `0${sec}`:sec}</h1>
        </>
    )
}

export default forwardRef(Timer);