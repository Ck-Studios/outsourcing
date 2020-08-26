import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Inquire from "components/inquire/Inquire";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";

export default function TeamContainer() {
    const isOpened = useSelector(state => state.common.openMenu);
    return (
        <>
            {
                isOpened &&
                <Menu/>
            }
            <Header/>
            <div className="w-full bg-black-100 desktop:min-w-1440">
                <div className="max-w-1080 mx-auto pt-80 pb-170 flex justify-between items-center">
                    <div className="pt-50">
                        <h1 className="text-40 text-white font-bold">
                            스타트업 출신<br/>
                            내부 전문 인력과 함께.
                        </h1>
                        <p className="text-base text-white mt-20 leading-1.75">
                            시냅스팀은 스타트업이나 창업 경험이 있는 멤버들로 구성되어<br/>
                            빠르고 퀄리티 높은 결과물을 약속합니다.
                        </p>
                    </div>
                    <img
                        src="/static/images/team/team.png"
                        className="w-420 h-334"
                    />
                </div>
            </div>
            <div className="w-full bg-black-200 desktop:min-w-1440">
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
                            프론트엔드 개발자
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
                            백엔드 개발자1
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
                            백엔드 개발자2
                        </div>
                        <div
                            className="w-220 h-100 rounded-full bg-black-200 border border-white flex justify-center items-center text-white font-bold mt-40">
                            브랜딩 디자이너
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black-100 pt-140 pb-160 desktop:min-w-1440">
                <Inquire/>
            </div>
            <Footer/>
        </>
    )
}