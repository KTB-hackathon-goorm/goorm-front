import React, {useState} from "react";
import "./PostPage.css";

export default function PostPage() {
    const [preview, setPreview] = useState("/public/images/imageUpload.png"); // 기본 이미지 경로

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreview(previewUrl);
        }
    };
    return (
        <>
            <div className="postBox">
                <div className="postInner">
                    <h2 className="title">인증하기</h2>
                    <label htmlFor="file-upload" className="upload-label">
                        <input type="file" id="file-upload" className="upload" onChange={handleImageUpload} />
                        <img src={preview} alt="Preview" className="preview-img" />
                    </label>
                    <textarea className="uploadText"></textarea>
                    <button className="uploadButton">올리기</button>
                </div>
            </div>
        </>
    )
}