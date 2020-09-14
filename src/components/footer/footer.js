export default function Footer() {
    return (
        <div className="w-full desktop:h-220 pt-60 mobile:py-40 mobile:px-20 bg-black-200 desktop:min-w-1440">
            <div className="max-w-1080 flex mobile:block mx-auto">
                <img
                    src="/static/images/logo2.png"
                    className="w-100 h-52 mobile:w-80 mobile:h-44 mr-80 object-contain"
                />
                <p className="text-12 mobile:hidden" style={{lineHeight: 1.83, color: "#b1b1c1"}}>
                    (주)시냅스코퍼레이션 | 대표 박찬규 | 서울특별시 서초구 강남대로 527 12층 1209호<br/>
                    사업자등록번호 : 412-87-01955<br/>
                    0to1.zip@gmail.com<br/>
                    Copyright ⓒ Synapse Corp. All rights reserved.
                </p>

                <p className="text-10 desktop:hidden mt-20" style={{lineHeight: 1.8, color: "#b1b1c1"}}>
                    (주)시냅스코퍼레이션 | 대표 박찬규<br/>
                    서울특별시 서초구 강남대로 527 12층 1209호<br/>
                    사업자등록번호 : 412-87-01955<br/>
                    info@synapsecorp.kr<br/>
                    Copyright ⓒ Synapse Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}