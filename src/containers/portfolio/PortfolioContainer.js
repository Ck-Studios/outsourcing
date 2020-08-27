import Header from "components/header/Header";
import Inquire from "components/inquire/Inquire";
import Footer from "components/footer/footer";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";
import LayoutWrapper from "components/common/layout/LayoutWrapper";
import dynamic from "next/dynamic";
import "./PortfolioContainer.css"

export default function PortfolioContainer() {
    const isOpened = useSelector(state => state.common.openMenu);
    const Swiper = dynamic(() => import("react-id-swiper"), {ssr: false});

    const swiperParams = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
                return <div style={{width: 8, height:8, borderRadius: "50%", background: "#0057ff"}}/>
            }
        }
    }

    return (
        <LayoutWrapper>
            <div className="w-full desktop:py-80 bg-black-100 desktop:min-w-1440 mobile:pt-40 mobile:px-20">
                <div className="max-w-1080 h-full flex justify-between items-center mx-auto mobile:block">
                    <div>
                        <p className="text-40 mobile:text-32 text-white font-bold">
                            내 생각보다 더<br/>
                            마음에 쏙 드는 결과물.
                        </p>
                        <p className="text-base text-white mt-20 mobile:text-14 mobile:mb-60">
                            획일화된 디자인, 템플릿 재활용이 아닌<br/>
                            클라이언트의 니즈에 집중한 맞춤 솔루션을 제시합니다.
                        </p>
                    </div>
                    <div className="mobile:flex mobile:justify-center">
                        <img
                            src="/static/images/portfolio/apps.png"
                            className="w-360 h-430 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mobile:hidden">
                <div className="pt-80 pb-100 bg-black-200 desktop:min-w-1440">
                    <div className="max-w-1080 h-full mx-auto">
                        <div className="flex">
                            <img
                                src="/static/images/portfolio/tyranno-logo.png"
                                className="w-100 h-100"
                            />
                            <div className="ml-20">
                                <p className="text-20 text-white leading-tight1">
                                    티라노 클래스
                                </p>
                                <p className="mt-8 leading-1 text-white">
                                    바로 써먹을 수 있는 지식을 실습 위주로 배울 수 있는<br/>
                                    온라인/오프라인 교육의 장점을 모은 블렌디드러닝 서비스입니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-40 flex justify-between">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <img
                                        src={`/static/images/tyrannoclass/${item}.png`}
                                        key={index.toString()}
                                        className="w-200 h-430"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="pt-80 pb-100 bg-black-100 desktop:min-w-1440">
                    <div className="max-w-1080 h-full mx-auto">
                        <div className="flex">
                            <img
                                src="/static/images/portfolio/kibi-logo.png"
                                className="w-100 h-100"
                            />
                            <div className="ml-20">
                                <p className="text-20 text-white leading-tight1">
                                    전자도서관 키비
                                </p>
                                <p className="mt-8 leading-1 text-white">
                                    키비는 유저가 이용할 수 있는 전자도서관을 연결해줍니다.<br/>
                                    전자책을 추천받고, 원하는 책을 대여하고 바로 읽을 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-40 flex justify-between">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <img
                                        src={`/static/images/kibi/${item}.png`}
                                        key={index.toString()}
                                        className="w-200 h-430"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="pt-80 pb-100 bg-black-200 desktop:min-w-1440">
                    <div className="max-w-1080 h-full mx-auto">
                        <div className="flex">
                            <img
                                src="/static/images/portfolio/cartcat-logo.png"
                                className="w-100 h-100"
                            />
                            <div className="ml-20">
                                <p className="text-20 text-white leading-tight1">
                                    카트캣
                                </p>
                                <p className="mt-8 leading-1 text-white">
                                    카트캣은 여러 채널에 입접하여 판매중인 쇼핑몰 사업자를 위한 통합 관리 솔루션입니다.<br/>
                                    매출 관리, 리뷰 관리, 마케팅 관리 기능을 제공합니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-40 flex justify-between">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <img
                                        src={`/static/images/cartcat/${item}.png`}
                                        key={index.toString()}
                                        className="w-200 h-430"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="pt-80 pb-100 bg-black-100 desktop:min-w-1440">
                    <div className="max-w-1080 h-full mx-auto">
                        <div className="flex">
                            <img
                                src="/static/images/portfolio/rabbit-logo.png"
                                className="w-100 h-100"
                            />
                            <div className="ml-20">
                                <p className="text-20 text-white leading-tight1">
                                    시간은 토끼
                                </p>
                                <p className="mt-8 leading-1 text-white">
                                    어차피 망가지는 사전 계획보다 사후 기록에 초점을 맞춘 일정 관리앱.<br/>
                                    30분 단위로 행동을 기록하게하여 시간을 최대한 효율적으로 쓸 수 있게 합니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-40 flex justify-between">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <img
                                        src={`/static/images/rabbit/${item}.png`}
                                        key={index.toString()}
                                        className="w-200 h-430"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="pt-80 pb-100 bg-black-200 desktop:min-w-1440">
                    <div className="max-w-1080 h-full mx-auto">
                        <div className="flex">
                            <img
                                src="/static/images/portfolio/bingo-logo.png"
                                className="w-100 h-100"
                            />
                            <div className="ml-20">
                                <p className="text-20 text-white leading-tight1">
                                    빙고링
                                </p>
                                <p className="mt-8 leading-1 text-white">
                                    다양한 주제의 빙고 게임을 할 수 있는 서비스입니다.<br/>
                                    빙고 체크 개수에 따라 결과를 볼 수 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="mt-40 flex justify-between">
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <img
                                        src={`/static/images/bingo/${item}.png`}
                                        key={index.toString()}
                                        className="w-200 h-430"
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="desktop:hidden">
                <div className="pt-60 pb-80 bg-black-200">
                    <div className="flex flex-col items-center mb-40">
                        <img
                            src="/static/images/portfolio/tyranno-logo.png"
                            className="w-54 h-54"
                        />
                        <p
                            className="my-12 text-base text-white font-bold"
                        >
                            티라노클래스
                        </p>
                        <p
                            className="text-14 leading-1.7 text-white text-center"
                        >
                            바로 써먹을 수 있는 지식을 실습 위주로 배우는<br/>
                            블렌디드러닝 서비스입니다.
                        </p>
                    </div>
                    <div className="w-full h-480">
                        <Swiper {...swiperParams} style={{width: "100%", height: "500px"}}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div
                                        className="w-220 h-480"
                                    >
                                        <img
                                            src={`/static/images/tyrannoclass/${item}.png`}
                                            key={index.toString()}
                                            className="object-contain"
                                        />
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="pt-60 pb-80 bg-black-100">
                    <div className="flex flex-col items-center mb-40">
                        <img
                            src="/static/images/portfolio/kibi-logo.png"
                            className="w-54 h-54"
                        />
                        <p
                            className="my-12 text-base text-white font-bold"
                        >
                            전자도서관 키비
                        </p>
                        <p
                            className="text-14 leading-1.7 text-white text-center"
                        >
                            유저가 이용할 수 있는 전자도서관을 연결해줍니다.<br/>
                            원하는 책을 대여하고 바로 읽을 수 있습니다.
                        </p>
                    </div>
                    <div className="w-full h-480">
                        <Swiper {...swiperParams} style={{width: "100%", height: "500px"}}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div
                                        className="w-220 h-480"
                                    >
                                        <img
                                            src={`/static/images/kibi/${item}.png`}
                                            key={index.toString()}
                                            className="object-contain"
                                        />
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="pt-60 pb-80 bg-black-200">
                    <div className="flex flex-col items-center mb-40">
                        <img
                            src="/static/images/portfolio/cartcat-logo.png"
                            className="w-54 h-54"
                        />
                        <p
                            className="my-12 text-base text-white font-bold"
                        >
                            카트캣
                        </p>
                        <p
                            className="text-14 leading-1.7 text-white text-center"
                        >
                            쇼핑몰 사업자를 위한 통합 관리 솔루션입니다.<br/>
                            매출 관리, 리뷰 관리, 마케팅 관리 기능을 제공합니다.
                        </p>
                    </div>
                    <div className="w-full h-480">
                        <Swiper {...swiperParams} style={{width: "100%", height: "500px"}}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div
                                        className="w-220 h-480"
                                    >
                                        <img
                                            src={`/static/images/cartcat/${item}.png`}
                                            key={index.toString()}
                                            className="object-contain"
                                        />
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="pt-60 pb-80 bg-black-100">
                    <div className="flex flex-col items-center mb-40">
                        <img
                            src="/static/images/portfolio/rabbit-logo.png"
                            className="w-54 h-54"
                        />
                        <p
                            className="my-12 text-base text-white font-bold"
                        >
                            시간은토끼
                        </p>
                        <p
                            className="text-14 leading-1.7 text-white text-center"
                        >
                            사전 계획보다 사후 기록에 초점을 맞춘 일정 관리앱.<br/>
                            30분 단위로 행동을 기록하여 시간관리를 돕습니다.
                        </p>
                    </div>
                    <div className="w-full h-480">
                        <Swiper {...swiperParams} style={{width: "100%", height: "500px"}}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div
                                        className="w-220 h-480"
                                    >
                                        <img
                                            src={`/static/images/rabbit/${item}.png`}
                                            key={index.toString()}
                                            className="object-contain"
                                        />
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="pt-60 pb-80 bg-black-200">
                    <div className="flex flex-col items-center mb-40">
                        <img
                            src="/static/images/portfolio/bingo-logo.png"
                            className="w-54 h-54"
                        />
                        <p
                            className="my-12 text-base text-white font-bold"
                        >
                            빙고링
                        </p>
                        <p
                            className="text-14 leading-1.7 text-white text-center"
                        >
                            다양한 주제의 빙고 게임을 할 수 있는 서비스입니다.<br/>
                            빙고 체크 개수에 따라 결과를 볼 수 있습니다.
                        </p>
                    </div>
                    <div className="w-full h-480">
                        <Swiper {...swiperParams} style={{width: "100%", height: "500px"}}>
                            {
                                [1, 2, 3, 4, 5].map((item, index) => (
                                    <div
                                        className="w-220 h-480"
                                    >
                                        <img
                                            src={`/static/images/bingo/${item}.png`}
                                            key={index.toString()}
                                            className="object-contain"
                                        />
                                    </div>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>

            </div>

            <div className="w-full bg-black-100 pt-140 pb-160 desktop:min-w-1440 mobile:py-80 mobile:px-20">
                <Inquire/>
            </div>
        </LayoutWrapper>
    )
}