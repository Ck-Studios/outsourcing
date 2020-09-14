import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Inquire from "components/inquire/Inquire";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";
import LayoutWrapper from "components/common/layout/LayoutWrapper";
import "./index.css";

export default function TeamContainer() {
    const isOpened = useSelector(state => state.common.openMenu);
    return (
        <LayoutWrapper>
            <div className="w-full bg-black-100 desktop:min-w-1440">
                <div
                    className="max-w-1080 mx-auto desktop:pt-80 desktop:pb-170 flex justify-between items-center mobile:block mobile:px-20">
                    <div className="pt-50 mobile:pt-40">
                        <h1 className="text-40 mobile:text-32 text-white font-bold">
                            스타트업 출신<br/>
                            내부 전문 인력과 함께.
                        </h1>
                        <p className="text-base text-white mt-20 leading-1.75">
                            시냅스팀은 스타트업이나 창업 경험이 있는 멤버들로<br className="desktop:hidden"/> 구성되어<br
                            className="mobile:hidden"/>
                            빠르고 퀄리티 높은 결과물을 약속합니다.
                        </p>
                    </div>
                    <img
                        src="/static/images/team/team.png"
                        className="w-420 h-334 object-contain mobile:w-full mobile:h-240 mobile:mt-40"
                    />
                </div>
            </div>
            <div className="w-full bg-black-200 desktop:min-w-1440 mobile:hidden">
                <div className="max-w-1080 mx-auto pt-100 pb-140 flex justify-between items-center flex-wrap relative">
                    <div
                        className="w-200 h-200 bg-black-200 border border-white rounded-full text-white font-bold flex justify-center items-center self-stretch relative z-10">
                        시냅스 팀
                    </div>
                    <div className="h-px w-full bg-white absolute top-199.5 z-0"/>
                    <div className="h-430 w-px bg-white absolute z-0 top-199.5 left-410.5"/>
                    <div className="h-430 w-px bg-white absolute z-0 top-199.5 left-690.5"/>
                    <div className="h-300 w-px bg-white absolute z-0 top-199.5 left-970.5"/>

                    <div className="w-780 flex flex-wrap mt-50 relative z-10">
                        <div
                            className="w-220 h-100 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold mr-60">
                            개발
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold mr-60">
                            디자인
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold">
                            마케팅
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40 mr-60">
                            웹 프론트엔드 개발자
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40 mr-60">
                            UX/UI 디자이너
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40">
                            디지털 마케터
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40 mr-60">
                            백엔드 개발자
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40 mr-60">
                            영상/모션 디자이너
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40">
                            콘텐츠 마케터
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40 mr-60">
                            앱 개발자
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40">
                            브랜딩 디자이너
                        </div>
                    </div>
                </div>
            </div>
            <div className="desktop:hidden w-full pl-20 pr-40 justify-between bg-black-200 py-80 relative">
                <div
                    className="rounded-full w-140 h-140 font-bold border border-white text-white bg-black-200 flex justify-center items-center relative z-10">
                    시냅스 팀
                </div>
                <div
                    className="absolute w-px h-1084 bg-white top-150.5 left-90.5 z-0"
                />
                <div
                    className="horizon-divider absolute h-px bg-white top-280.5 left-90.5"
                />

                <div
                    className="horizon-divider absolute h-px bg-white left-90.5"
                    style={{top: 756.5}}
                />

                <div
                    className="horizon-divider absolute h-px bg-white top-280.5 left-90.5"
                    style={{top: 1232.5}}
                />

                <div className="flex flex-col items-end mt-20">
                    <div className="relative">
                        <div
                            className="absolute w-px h-334 bg-white top-20 z-0"
                            style={{right: "50%"}}
                        />
                        <div
                            className="w-180 h-80 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold relative z-10">
                            개발
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            웹 프론트엔드 개발자
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            앱 개발자
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            백엔드 개발자
                        </div>
                    </div>
                    <div
                        className="relative mt-60"
                    >
                        <div
                            className="absolute w-px h-334 bg-white top-20 z-0"
                            style={{right: "50%"}}
                        />
                        <div
                            className="w-180 h-80 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold relative z-10">
                            디자인
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            UX/UI 디자이너
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            영상/모션 디자이너
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            브랜딩 디자이너
                        </div>
                    </div>

                    <div
                        className="relative mt-60"
                    >
                        <div
                            className="absolute w-px h-220 bg-white top-20 z-0"
                            style={{right: "50%"}}
                        />
                        <div
                            className="w-180 h-80 rounded-full bg-white border border-transparent flex justify-center items-center text-black-100 font-bold relative z-10">
                            마케팅
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            디지털 마케터
                        </div>
                        <div
                            className="w-180 h-80 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-32 relative z-10">
                            콘텐츠 마케터
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black-100 desktop:pt-140 desktop:pb-160 desktop:min-w-1440 mobile:px-20 mobile:py-80">
                <Inquire/>
            </div>
        </LayoutWrapper>
    )
}