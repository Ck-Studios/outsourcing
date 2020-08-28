import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Inquire from "components/inquire/Inquire";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";
import LayoutWrapper from "components/common/layout/LayoutWrapper";

const devServices = [
    "iOS 앱",
    "Android 앱",
    "웹서비스",
    "네이티브 앱",
    "하이브리드 앱"
]

const designServices = [
    "UX/UI 디자인",
    "로고/브랜딩",
    "영상/모션"
]

const marketingServices = [
    "구글 애널리틱스",
    "GTM/픽셀 세팅",
]

export default function ServiceContainer() {
    const isOpened = useSelector(state => state.common.openMenu);
    return (
        <LayoutWrapper>
            <div className="w-full desktop:pt-140 bg-black-100 desktop:min-w-1440 mobile:min-w-360">
                <div className="max-w-1080 mx-auto mobile:pt-40 mobile:px-20">
                    <div className="flex justify-between items-center mobile:block">
                        <div>
                            <p className="text-40 mobile:text-32 mobile:leading-1.3 font-bold text-white leading-1.4">
                                개발, 디자인, 마케팅<br/>
                                무엇이 필요하신가요?
                            </p>
                            <p className="text-base mobile:text-14 text-white mobile:leading-1.7 leading-1.75 mt-20">
                                우리는 마치 같은 회사 동료처럼 친근하게 협업하고<br/>
                                유연하게 커뮤니케이션합니다.
                            </p>
                        </div>
                        <img
                            src="/static/images/service/service.png"
                            className="w-480 h-280 mobile:w-full h-183 object-contain"
                        />
                    </div>

                    <div className="flex mt-186 mobile:mt-72">
                        <div className="flex h-201 items-center mobile:hidden">
                            <p className="text-white font-bold text-36">
                                개발
                            </p>
                            <div
                                className="w-267 h-px mx-32"
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                }}
                            />
                        </div>
                        <div className="desktop:w-683 flex flex-wrap mobile:hidden">
                            <div
                                className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                개발
                            </div>
                            {
                                devServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center desktop:${index > 0 && index !== 3 && "ml-40"} desktop:${index >= 3 && "mt-32"} mobile:${index > 0 && "mt-20"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="desktop:hidden px-10 w-full">
                            <div className=" flex justify-between">
                                <div
                                    className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                    개발
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        웹 서비스
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between mt-20">
                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        iOS 앱
                                    </div>
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        Android 앱
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between mt-20">
                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        네이티브 앱
                                    </div>
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        하이브리드 앱
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-140">
                        <div className="flex h-201 items-center mobile:hidden">
                            <p className="text-white font-bold text-36 whitespace-no-wrap">
                                디자인
                            </p>
                            <div
                                className="w-234 h-px mx-32"
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                }}
                            />
                        </div>
                        <div className="flex mobile:hidden mobile:px-10 mobile:justify-between">
                            <div
                                className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                디자인
                            </div>
                            {
                                designServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center desktop:${index > 0 && "ml-40"} mobile:${index > 0 && "mt-20"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="desktop:hidden px-10 w-full">
                            <div className=" flex justify-between">
                                <div
                                    className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                    디자인
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        UX/UI 디자인
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between mt-20">
                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        로고/브랜딩
                                    </div>
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        영상/모
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-140">
                        <div className="flex h-201 items-center mobile:hidden">
                            <p className="text-white font-bold text-36 whitespace-no-wrap">
                                마케팅
                            </p>
                            <div
                                className="w-234 h-px mx-32"
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                }}
                            />

                        </div>
                        <div className="flex mobile:hidden mobile:px-10 mobile:justify-between">
                            <div
                                className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                마케팅
                            </div>
                            {
                                marketingServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center desktop:${index > 0 && "ml-40"} mobile:${index > 0 && "mt-20"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }

                            <div
                                className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center desktop:ml-40 mobile:mt-20 text-center`}
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                }}
                            >
                                <div
                                    className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                >
                                    디지털 광고<br/>
                                    제작/집행
                                </div>
                            </div>
                        </div>

                        <div className="desktop:hidden px-10 w-full">
                            <div className=" flex justify-between">
                                <div
                                    className="desktop:hidden text-32 font-bold flex items-center text-white w-140 h-140 justify-center">
                                    마케팅
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        구글 애널리틱스
                                    </div>
                                </div>
                            </div>

                            <div className=" flex justify-between mt-20">
                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                    >
                                        GTM/픽셀 세팅
                                    </div>
                                </div>

                                <div
                                    className={`w-201 h-201 mobile:w-140 mobile:h-140 rounded-full flex justify-center items-center`}
                                    style={{
                                        background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                    }}
                                >
                                    <div
                                        className="w-199 h-199 mobile:w-138 mobile:h-138 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold text-center"
                                    >
                                        디지털 광고<br/>
                                        제작/집행
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-240 pb-160 mobile:mt-140 mobile:pb-100">
                        <Inquire/>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}