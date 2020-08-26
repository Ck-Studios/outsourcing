import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Inquire from "components/inquire/Inquire";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";

const devServices = [
    "iOS 앱",
    "Android 앱",
    "웹서비스",
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
        <>
            {
                isOpened &&
                    <Menu/>
            }
            <Header/>
            <div className="w-full pt-140 bg-black-100 desktop:min-w-1440">
                <div className="max-w-1080 mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-40 font-bold text-white leading-1.4">
                                개발, 디자인, 마케팅<br/>
                                무엇이 필요하신가요?
                            </p>
                            <p className="text-base text-white leading-1.75 mt-20">
                                우리는 마치 같은 회사 동료처럼 친근하게 협업하고<br/>
                                유연하게 커뮤니케이션합니다.
                            </p>
                        </div>
                        <img
                            src="/static/images/service/service.png"
                            className="w-480 h-280"
                        />
                    </div>

                    <div className="flex mt-186">
                        <div className="flex h-201 items-center">
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
                        <div className="w-683 flex flex-wrap">
                            {
                                devServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 rounded-full flex justify-center items-center ${index > 0 && index !== 3 && "ml-40"} ${index === 3 && "mt-32"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex mt-140">
                        <div className="flex h-201 items-center">
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
                        <div className="flex">
                            {
                                designServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 rounded-full flex justify-center items-center ${index > 0 && "ml-40"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex mt-140">
                        <div className="flex h-201 items-center">
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
                        <div className="flex">
                            {
                                marketingServices.map((item, index) => (
                                    <div
                                        key={index.toString()}
                                        className={`w-201 h-201 rounded-full flex justify-center items-center ${index > 0 && "ml-40"}`}
                                        style={{
                                            background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                        }}
                                    >
                                        <div
                                            className="w-199 h-199 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                        >
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }

                            <div
                                className={`w-201 h-201 rounded-full flex justify-center items-center ml-40 text-center`}
                                style={{
                                    background: "linear-gradient(to right, #1bacff, #1d5aff, #8a48ff)"
                                }}
                            >
                                <div
                                    className="w-199 h-199 rounded-full bg-black-100 flex items-center justify-center text-white text-20 font-bold"
                                >
                                    디지털 광고<br/>
                                    제작/집행
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-240 pb-160">
                        <Inquire/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}