import React from 'react';
import "./RecordCard.css";

export default function RecordCard({data}) {

    return (
        <>
            <div className="card">
                <h3 className="title">{data.date}</h3>
                <img src={data.src} alt="record" className="img" />
                <div className="description">
                    <div className="row">
                        <p className="subtitle">{data.question}</p>
                        {data.win ? <div className="win">승리</div> : <div className="lose">패배</div>}
                    </div>
                    <div className="row2">
                        <div className="no">불가능</div>
                        <span>{data.yes} : {data.no}</span>
                        <div className="yes">가능</div>
                    </div>
                </div>
            </div>
        </>
    )
}