import React from "react";
import "./PostPage.css";

export default function PostPage() {
    return (
        <>
            <div className="postBox">
                <div className="postInner">
                    <h2 className="title">인증하기</h2>
                    <label htmlFor="file-upload" className="upload-label">
                        <input type="file" className="upload" />
                    </label>
                    <textarea className="uploadText"></textarea>
                    <button className="uploadButton">올리기</button>
                </div>
            </div>
        </>
    )
}