import Header from "components/header/Header";
import Footer from "components/footer/footer";
import Inquire from "components/inquire/Inquire";
import {useSelector} from "react-redux";
import Menu from "components/menu/Menu";
import LayoutWrapper from "components/common/layout/LayoutWrapper";

const process = [
    "홈페이지 상담 신청",
    "간단 상담 및 견적서 전달",
    "온/오프라인 미팅 및 계약",
    "서비스 시안 제작",
    "시안 전달 및 확인",
    "소프트웨어 개발",
    "소프트웨어 QA",
    "작업 완료 및 최종 전달",
    "계약에 따른 유지보수"
]

export default function ProcessContainer() {
    return (
        <LayoutWrapper>
            <div className="w-full bg-black-100 desktop:min-w-1440 mobile:min-w-360">
                <div className="max-w-1080 mx-auto desktop:py-120 mobile:pt-40 flex justify-between items-center mobile:block mobile:px-20">
                    <div>
                        <h1 className="text-40 mobile:text-32 mobile:leading-1.3 text-white font-bold">
                            성공적인 협업을 위한<br/>
                            깔끔한 프로세스.
                        </h1>
                        <p className="text-base mobile:text-14 text-white mt-20 leading-1.75">
                            개발을 통해 얻고자 하는 것이 무엇인지 분명히 하고<br/>
                            가장 효율적인 방식으로 진행합니다.
                        </p>
                    </div>
                    <img
                        src="/static/images/process/process.png"
                        className="w-440 h-345 object-contain mobile:w-full mobile:h-240 mobile:mt-80"
                    />
                </div>
            </div>
            <div className="w-full bg-black-200 desktop:min-w-1440">
                <div className="max-w-1080 mx-auto py-100 mobile:py-80 mobile:flex-col flex justify-between items-center flex-wrap relative overflow-hidden mobile:box-content">
                    <div
                        className="desktop:hidden w-px bg-white absolute z-0"
                        style={{height: "85%"}}
                    />
                    {
                        process.map((item, index) => (
                            <div
                                key={index.toString()}
                                className={`w-320 h-100 rounded-full border-white border ${index > 2 ? "desktop:mt-60" : null} text-20 text-white flex justify-center items-center ${index > 0 ? "mobile:mt-40" : null} bg-black-200 relative z-10`}
                            >
                                {index + 1}. &nbsp;
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full bg-black-100 pt-140 pb-160 desktop:min-w-1440 mobile:px-20 mobile:py-80">
                <Inquire/>
            </div>
        </LayoutWrapper>
    )
}