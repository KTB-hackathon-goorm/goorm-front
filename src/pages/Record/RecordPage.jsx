import "./RecordPage.css";
import RecordCard from "../../components/Record/RecordCard";
import uuid from 'react-uuid';

export default function RecordPage() {
    const array = [
        { date: "2024년 08월 06일", win: true, yes: 7, no: 5, src: "/images/0806.png", question: "헤어진 애인과 친구로 지내는게 가능?" },
        { date: "2024년 08월 05일", win: true, yes: 9, no: 3, src: "/images/0805.png", question: "충분한 보상이 있다면 휴대폰 기록 공개 가능?" },
        { date: "2024년 08월 04일", win: true, yes: 7, no: 5, src: "/images/0804.png", question: "보이드 손잡고 네일샵 가능?" },
        { date: "2024년 08월 03일", win: true, yes: 11, no: 1, src: "/images/0803.png", question: "학점 a+ 확정 후 강의에서 공개 고백 가능?" },
        { date: "2024년 08월 02일", win: true, yes: 12, no: 0, src: "/images/0802.png", question: "유치원생 친구 10명 놀아주기 가능?" },
        { date: "2024년 08월 01일", win: false, yes: 5, no: 9, src: "/images/0801.png", question: "직장 상사와 함께 틱톡 챌린지 가능?" },
        { date: "2024년 07월 31일", win: true, yes: 7, no: 5, src: "/images/0731.png", question: "애인이 이성친구의 새우를 까주는거 가능?" }
    ]

    return (
        <>
            <div className="cards">
                {array.map((record) => (
                    <RecordCard key={uuid()} data={record} />
                ))}
            </div>
        </>
    )
}

/**
 * 
 */
// 새우
// 깻잎
// 전여친과 친구가능
//직장 상사 앞에서 틱톡 영상 가능?
// 다섯살 애기의 환상읠 깨부술수 있나 없나
// 돈받고 휴대폰 기록 공개
// 학점 a+ 받고 수업시간에 ppt 공개고백
// 보이드랑 손잡고 네일샵 데이트 가능?
