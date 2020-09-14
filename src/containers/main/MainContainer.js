import Inquire from "components/inquire/Inquire";
import {motion} from "framer-motion";
import {SCALE_UP, SLIDE_LEFT, SLIDE_UP, SLIDE_UP2, FADE_IN} from "components/common/animation/Animation";
import IntersectionView from "components/common/layout/IntersectionView";
import IntersectionObserver from "components/common/utils/IntersectionObserver";
import {useSelector} from "react-redux";
import LayoutWrapper from "components/common/layout/LayoutWrapper";
import {useRouter} from "next/router";

export default function MainContainer() {
    const router = useRouter();

    return (
        <LayoutWrapper>
            <div className="w-full desktop:h-700 bg-black-100 desktop:min-w-1440 mobile:pt-40">
                <div className="h-full flex desktop:justify-center desktop:items-center desktop:mx-auto mobile:px-20 mobile:flex-col">
                    <motion.img
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={SCALE_UP()}
                        src="/static/images/main/phone.png"
                        className="w-480 h-564 mobile:w-306 mobile:h-360 object-contain mobile:order-2"
                    />

                    <div className="desktop:ml-100 mobile:order-1 mobile:mb-40">
                        <motion.p
                            className="mobile:text-32 text-40 text-white leading-base font-bold"
                            initial="initial"
                            animate="animate"
                            variants={SLIDE_UP(0.5)}
                        >
                            당신의 성공을 <br className="desktop:hidden"/>만들어내는<br/>
                            외주 서비스.
                        </motion.p>
                        <motion.p
                            className="leading2 text-white text-base mt-26 mobile:mt-20 mobile:text-14"
                            initial="initial"
                            animate="animate"
                            variants={SLIDE_UP(0.8)}
                        >
                            우리의 클라이언트가 세상을 바꿀 수 있도록<br/>
                            시냅스코퍼레이션은 진심을 담아 서포트합니다.
                        </motion.p>
                    </div>
                </div>
            </div>

            <IntersectionObserver>
                <div className="w-full desktop:h-688 bg-black-200 desktop:min-w-1440 mobile:py-80 mobile:px-20">
                    <IntersectionView className="max-w-1080 h-full flex desktop:justify-between desktop:items-center mx-auto mobile:flex-col">
                        <div>
                            <p
                                className="text-40 text-white leading-base font-bold mobile:text-32"
                            >
                                스타트업 DNA니까<br/>
                                빠르고 트렌디하게.
                            </p>
                            <p
                                className="leading2 text-white text-base mt-26 mobile:text-14 mobile:mt-20 mobile:mb-40"
                            >
                                기존 업체처럼 획일화된 디자인에 솔루션 재활용으로 지치셨다면<br/>
                                시냅스 팀을 만나보세요. 린하게 고퀄리티 제품을 만듭니다.
                            </p>
                            <a className="block desktop:mt-80">
                                <IntersectionView
                                    variants={FADE_IN(1)}
                                    initial="initial"
                                    animate="animate"
                                    className="text-white text-18 font-bold" style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                    "-webkit-background-clip": "text",
                                    "-webkit-text-fill-color": "transparent"
                                }}>
                                    진행방식 자세히보기 >
                                </IntersectionView>
                            </a>
                        </div>
                        <IntersectionView
                            variants={FADE_IN(0)}
                            className="mobile:mt-40 mobile:flex mobile:justify-center"
                        >
                            <img
                                src="/static/images/main/rocket.png"
                                className="w-480 h-438 object-contain mobile:w-280 mobile:h-290"
                            />
                        </IntersectionView>
                    </IntersectionView>
                </div>
            </IntersectionObserver>

            <IntersectionObserver>
                <div className="w-full bg-black-100 desktop:pb-183 desktop:min-w-1440 mobile:py-80 mobile:px-20">
                    <div className="max-w-1080 desktop:pt-170 mx-auto">
                        <div className="mb-112 mobile:mb-40">
                            <IntersectionView
                                className="text-40 mobile:text-32 text-white leading-base font-bold"
                                variants={SLIDE_LEFT}
                                initial="initial"
                                animate="animate"
                            >
                                개발, 디자인, 마케팅까지<br/>
                                내부 전문 인력과 함께.
                            </IntersectionView>
                            <IntersectionView
                                className="leading2 text-white text-base mt-26"
                                variants={FADE_IN(0.3)}
                                initial="initial"
                                animate="animate"
                            >
                                개인 프리랜서가 아닌 법인 회사니까 <br /> 느린 피드백, 연락두절 걱정 없죠.
                            </IntersectionView>
                        </div>
                        <div className="flex mobile:flex-col mobile:items-center">
                            <IntersectionView
                                variants={SLIDE_UP2(0)}
                                className="w-320 h-320 mobile:w-280 mobile:h-280 rounded-30 overflow-hidden flex justify-center items-center"
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                                }}
                            >
                                <div
                                    className="w-318 h-318 mobile:w-278 mobile:h-278 flex flex-col justify-center items-center bg-black-100 rounded-30"
                                >
                                    <p className="text-26 mobile:text-24 font-bold text-white mb-40">
                                        개발
                                    </p>
                                    <div className="text-center mobile:text-base text-20 text-white leading3">
                                        iOS 앱<br/>
                                        Android 앱<br/>
                                        웹서비스
                                    </div>
                                    <a className="block mt-40"
                                        onClick={() => router.push("/service")}
                                    >
                                        <motion.span
                                            className="text-white text-base font-bold" style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                            "-webkit-background-clip": "text",
                                            "-webkit-text-fill-color": "transparent"
                                        }}>
                                            더보기 >
                                        </motion.span>
                                    </a>
                                </div>
                            </IntersectionView>

                            <IntersectionView
                                className="w-320 h-320 mobile:w-280 mobile:h-280 rounded-30 overflow-hidden flex justify-center items-center desktop:ml-60 mobile:mt-40"
                                variants={SLIDE_UP2(0.3)}
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                                }}
                            >
                                <div
                                    className="w-318 h-318 mobile:w-278 mobile:h-278 flex flex-col justify-center items-center bg-black-100 rounded-30"
                                >
                                    <p className="text-26 mobile:text-24 font-bold text-white mb-40">
                                        디자인
                                    </p>
                                    <div className="text-center mobile:text-base text-20 text-white leading3">
                                        UX/UI<br/>
                                        로고/브랜딩<br/>
                                        영상/모션
                                    </div>
                                    <a className="block mt-40"
                                       onClick={() => router.push("/service")}
                                    >
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                더보기 >
                            </span>
                                    </a>
                                </div>
                            </IntersectionView>

                            <IntersectionView
                                className="w-320 h-320 mobile:w-280 mobile:h-280 rounded-30 overflow-hidden flex justify-center items-center desktop:ml-60 mobile:mt-40"
                                variants={SLIDE_UP2(0.6)}
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)"
                                }}
                            >
                                <div
                                    className="w-318 h-318 mobile:w-278 mobile:h-278 flex flex-col justify-center items-center bg-black-100 rounded-30"
                                >
                                    <p className="text-26 mobile:text-24 font-bold text-white mb-40">
                                        마케팅
                                    </p>
                                    <div className="text-center mobile:text-base text-20 text-white leading3">
                                        GA 설치<br/>
                                        GTM/픽셀 세팅<br/>
                                        디지털광고
                                    </div>
                                    <a className="block mt-40"
                                       onClick={() => router.push("/service")}
                                    >
                            <span className="text-white text-base font-bold" style={{
                                background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                "-webkit-background-clip": "text",
                                "-webkit-text-fill-color": "transparent"
                            }}>
                                더보기 >
                            </span>
                                    </a>
                                </div>
                            </IntersectionView>
                        </div>
                    </div>
                </div>
            </IntersectionObserver>

            <IntersectionObserver>
                <div className="w-full bg-black-200 desktop:min-w-1440 mobile:px-20">
                    <div className="desktop:max-w-1080 h-full mx-auto py-100 mobile:py-80">
                        <div className="flex justify-between">
                            <div className="desktop:mt-100">
                                <p
                                    className="text-40 mobile:text-32 text-white leading-base font-bold"
                                    variants={SLIDE_UP2(0)}
                                >
                                    사용자를 위해<br className="desktop:hidden"/> 고민하니까<br/>
                                    결과물이 다릅니다.
                                </p>
                                <p
                                    variants={FADE_IN(0.5)}
                                    className="mobile:text-14 leading2 text-white text-base mt-26 mobile:mt-20"
                                >
                                    우리는 클라이언트의 니즈를 깊이 이해하고,<br className="mobile:hidden"/>
                                    전문가 입장에서 더욱 효율적이고 창의적인 솔루션을 제안합니다.
                                </p>
                                <a
                                    className="block mt-80 mobile:mt-40"
                                    onClick={() => router.push("/portfolio")}
                                >
                                    <IntersectionView
                                        variants={FADE_IN(1)}
                                        className="text-white text-base font-bold" style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                                        "-webkit-background-clip": "text",
                                        "-webkit-text-fill-color": "transparent"
                                    }}>
                                        포트폴리오 자세히 보기 >
                                    </IntersectionView>
                                </a>
                            </div>
                            <div className="flex mobile:hidden">
                                <IntersectionView
                                    className="flex flex-col items-center"
                                    variants={SLIDE_UP2(0.5)}
                                >
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
                                </IntersectionView>
                                <IntersectionView
                                    className="flex flex-col items-center ml-40"
                                    variants={SLIDE_UP2(0.7)}
                                >
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
                                </IntersectionView>
                            </div>
                        </div>
                        <div className="mt-60 mobile:hidden">
                            <div className="flex justify-end">
                                <IntersectionView
                                    variants={SLIDE_UP2(0.8)}
                                    className="flex flex-col items-center"
                                >
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
                                </IntersectionView>
                                <IntersectionView
                                    className="flex flex-col items-center ml-40"
                                    variants={SLIDE_UP2(0.9)}
                                >
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
                                </IntersectionView>
                                <IntersectionView
                                    className="flex flex-col items-center ml-40"
                                    variants={SLIDE_UP2(1)}
                                >
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
                                </IntersectionView>
                            </div>
                        </div>
                    </div>
                </div>
            </IntersectionObserver>

            <div className="w-full bg-black-100 pt-275 pb-160 desktop:min-w-1440 mobile:py-80 mobile:px-20">
                <Inquire/>
            </div>
        </LayoutWrapper>
    )
}