import Header from "components/header/Header";
import Footer from "components/footer/footer";

export default function MainContainer() {
    return (
        <>
            <Header/>
            <div className="w-full h-700 bg-black-100">
                <div className="max-w-1080 h-full flex justify-center items-center mx-auto">
                    <img
                        src="/static/images/main/phone.png"
                        className="w-480 h-564 object-contain"
                    />

                    <div className="ml-100">
                        <p className="text-40 text-white leading-base font-bold">
                            당신의 성공을 만들어내는<br/>
                            외주 서비스.
                        </p>
                        <p className="leading2 text-white text-base mt-26 w-500">
                            우리의 클라이언트가 세상을 바꿀 수 있도록<br/>
                            시냅스코퍼레이션은 진심을 담아 서포트합니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full h-688 bg-black-200">
                <div className="max-w-1080 h-full flex justify-between items-center mx-auto">
                    <div>
                        <p className="text-40 text-white leading-base font-bold">
                            스타트업 DNA니까<br/>
                            빠르고 트렌디하게.
                        </p>
                        <p className="leading2 text-white text-base mt-26 w-500">
                            기존 업체처럼 획인화된 디자인에 솔루션 재활용으로 지치셨다면<br/>
                            시냅스 팀을 만나보세요. 린하게 고퀄리티 제품을 만듭니다.
                        </p>
                        <a className="block mt-80">
                            <span className="text-white text-18 font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                진행방식 자세히보기 >
                            </span>
                        </a>
                    </div>
                    <img
                        src="/static/images/main/rocket.png"
                        className="w-480 h-438 object-contain"
                    />
                </div>
            </div>

            <div className="w-full bg-black-100 pb-183">
                <div className="max-w-1080 pt-170 mx-auto">
                    <div className="mb-112">
                        <p className="text-40 text-white leading-base font-bold">
                            개발, 디자인, 마케팅까지<br/>
                            내부 전문 인력과 함께.
                        </p>
                        <p className="leading2 text-white text-base mt-26 w-500">
                            개인 프리랜서가 아닌 법인 회사니까 느린 피드백, 연락두절 걱정 없죠.
                        </p>
                    </div>
                    <div className="flex">
                        <div
                            className="w-320 h-320 rounded-30 overflow-hidden flex justify-center items-center"
                            style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                            }}
                        >
                            <div
                                className="flex flex-col justify-center items-center bg-black-100 rounded-30"
                                style={{width: 318, height: 318}}
                            >
                                <p className="text-26 font-bold text-white mb-40">
                                    개발
                                </p>
                                <div className="text-center text-20 text-white leading3">
                                    iOS 앱<br/>
                                    Android 앱<br/>
                                    웹서비스
                                </div>
                                <a className="block mt-40">
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                더보기 >
                            </span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="w-320 h-320 rounded-30 overflow-hidden flex justify-center items-center ml-60"
                            style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                            }}
                        >
                            <div
                                className="flex flex-col justify-center items-center bg-black-100 rounded-30"
                                style={{width: 318, height: 318}}
                            >
                                <p className="text-26 font-bold text-white mb-40">
                                    디자인
                                </p>
                                <div className="text-center text-20 text-white leading3">
                                    UX/UI<br/>
                                    로고/브랜딩<br/>
                                    영상/모션
                                </div>
                                <a className="block mt-40">
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                더보기 >
                            </span>
                                </a>
                            </div>
                        </div>

                        <div
                            className="w-320 h-320 rounded-30 overflow-hidden flex justify-center items-center ml-60"
                            style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                            }}
                        >
                            <div
                                className="flex flex-col justify-center items-center bg-black-100 rounded-30"
                                style={{width: 318, height: 318}}
                            >
                                <p className="text-26 font-bold text-white mb-40">
                                    마케팅
                                </p>
                                <div className="text-center text-20 text-white leading3">
                                    GA 설치<br/>
                                    GTM/픽셀 세팅<br/>
                                    디지털광고
                                </div>
                                <a className="block mt-40">
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                더보기 >
                            </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black-200">
                <div className="max-w-1080 h-full mx-auto pt-100 pb-100">
                    <div className="flex justify-between">
                        <div className="mt-100">
                            <p className="text-40 text-white leading-base font-bold">
                                사용자를 위해 고민하니까<br/>
                                결과물이 다릅니다.
                            </p>
                            <p className="leading2 text-white text-base mt-26 w-500">
                                우리는 클라이언트의 니즈를 깊이 이해하고,
                                전문가 입장에서 더욱 효율적이고 창의적인 솔루션을 제안합니다.
                            </p>
                            <a className="block mt-80">
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                포트폴리오 자세히 보기 >
                            </span>
                            </a>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/static/images/portfolio/tyranno-logo.png"
                                    className="w-54 h-54"
                                />
                                <p className="text-base text-white mt-12 mb-28">
                                    티라노클래스
                                </p>
                                <img
                                    src="/static/images/portfolio/tyranno-sample.png"
                                    className="w-200 h-430"
                                />
                            </div>
                            <div className="flex flex-col items-center ml-40">
                                <img
                                    src="/static/images/portfolio/cartcat-logo.png"
                                    className="w-54 h-54"
                                />
                                <p className="text-base text-white mt-12 mb-28">
                                    카트캣
                                </p>
                                <img
                                    src="/static/images/portfolio/cartcat-sample.png"
                                    className="w-200 h-430"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-60">
                        <div className="flex justify-end">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/static/images/portfolio/kibi-logo.png"
                                    className="w-54 h-54"
                                />
                                <p className="text-base text-white mt-12 mb-28">
                                    전자도서관 키비
                                </p>
                                <img
                                    src="/static/images/portfolio/kibi-sample.png"
                                    className="w-200 h-430"
                                />
                            </div>
                            <div className="flex flex-col items-center ml-40">
                                <img
                                    src="/static/images/portfolio/rabbit-logo.png"
                                    className="w-54 h-54"
                                />
                                <p className="text-base text-white mt-12 mb-28">
                                    시간은 토끼
                                </p>
                                <img
                                    src="/static/images/portfolio/rabbit-sample.png"
                                    className="w-200 h-430"
                                />
                            </div>
                            <div className="flex flex-col items-center ml-40">
                                <img
                                    src="/static/images/portfolio/bingo-logo.png"
                                    className="w-54 h-54"
                                />
                                <p className="text-base text-white mt-12 mb-28">
                                    빙고링
                                </p>
                                <img
                                    src="/static/images/portfolio/bingo-sample.png"
                                    className="w-200 h-430"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-black-100 pt-275 pb-160">
                <div className="max-w-1080 mx-auto">
                    <span className="text-white text-40 font-bold" style={{
                        background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent"
                    }}>
                        상상하던 서비스를 구현해보세요.
                    </span>
                    <p className="mt-28 text-white leading-1 text-base">
                        상상하는 서비스를 실제로 구현해보세요.<br/>
                        문의를 남겨주시면 1영업일 내에 연락드리겠습니다.
                    </p>

                    <div className="w-540 mt-60">
                        <div className="flex">
                            <div>
                                <p className="mb-12 text-white leading-1 text-base font-bold">
                                    이름
                                </p>
                                <div className="w-260 h-52 bg-black-200 px-2">
                                    <input
                                        type="text"
                                        className="w-full h-full bg-transparent outline-none text-white"
                                    />
                                </div>
                            </div>

                            <div className="ml-20">
                                <p className="mb-12 text-white leading-1 text-base font-bold">
                                    휴대폰
                                </p>
                                <div className="w-260 h-52 bg-black-200 px-2">
                                    <input
                                        type="text"
                                        className="w-full h-full bg-transparent outline-none text-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-28">
                            <p className="mb-12 text-white leading-1 text-base font-bold">
                                이메일
                            </p>
                            <div className="w-full h-52 bg-black-200 px-2">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent outline-none text-white"
                                />
                            </div>
                        </div>
                        <div className="mt-28">
                            <p className="mb-12 text-white leading-1 text-base font-bold">
                                원하시는 서비스의 구체적인 내용
                            </p>
                            <div className="w-full h-160 bg-black-200 px-2">
                                <textarea
                                    className="w-full h-full bg-transparent outline-none text-white resize-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-180 h-60 bg-blue-700 mt-48 rounded-30 flex justify-center items-center text-18 leading-1 font-bold text-white">
                        보내기
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}