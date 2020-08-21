export default function Footer() {
    return (
        <div className="w-full h-220 pt-60 bg-black-200">
            <div className="max-w-1080 flex mx-auto">
                <img
                    src="/static/images/logo2.png"
                    className="w-100 h-52 mr-80 object-contain"
                />
                <p className="text-12" style={{lineHeight: 1.83, color: "#b1b1c1"}}>
                    (주)시냅스코퍼레이션 | 대표 박찬규 | 서울특별시 서초구 강남대로 527 12층 1209호<br/>
                    사업자등록번호 : 412-87-01955 | 통신판매업신고 : 2020-서울ㅇㅇ-0000<br/>
                    0to1.zip@gmail.com<br/>
                    Copyright ⓒ Synapse Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}