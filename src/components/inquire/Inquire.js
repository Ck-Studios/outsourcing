import IntersectionObserver from "components/common/utils/IntersectionObserver";
import IntersectionView from "components/common/layout/IntersectionView";
import {FADE_IN, SLIDE_UP2} from "components/common/animation/Animation";
import {motion} from "framer-motion";
import styled from "styled-components";

export default function Inquire() {
    return (
        <IntersectionObserver>
            <div className="max-w-1080 mx-auto">
                <IntersectionView
                    variants={SLIDE_UP2(0)}
                    className="text-white text-40 font-bold mobile:text-32"
                    style={{
                    background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent"
                }}>
                    상상하던 서비스를 <br className="desktop:hidden"/>구현해보세요.
                </IntersectionView>
                <IntersectionView
                    variants={FADE_IN(0.5)}
                    className="mt-28 text-white leading-1 text-base mobile:hidden"
                >
                    상상하는 서비스를 실제로 구현해보세요.<br/>
                    문의를 남겨주시면 1영업일 내에 연락드리겠습니다.
                </IntersectionView>

                <IntersectionView
                    variants={FADE_IN(0.5)}
                    className="mt-30 text-white leading-1 text-base desktop:hidden"
                >
                    시냅스만의 노하우로 클라이언트의 상상을 현실로<br/>
                    만들어 드립니다. 문의를 남겨주시면 1영업일 내에<br/>
                    연락드리겠습니다.
                </IntersectionView>

                <div className="desktop:w-540 mt-60 mobile:mt-40">
                    <div className="flex mobile:block">
                        <div>
                            <p className="mb-12 text-white leading-1 text-base font-bold">
                                이름
                            </p>
                            <div className="w-260 h-52 bg-black-200 px-2 mobile:w-full mobile:h-48">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent outline-none text-white"
                                />
                            </div>
                        </div>

                        <div className="desktop:ml-20 mobile:mt-20">
                            <p className="mb-12 text-white leading-1 text-base font-bold">
                                휴대폰
                            </p>
                            <div className="w-260 h-52 bg-black-200 px-2 mobile:w-full mobile:h-48">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent outline-none text-white"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 mobile:mt-20">
                        <p className="mb-12 text-white leading-1 text-base font-bold">
                            이메일
                        </p>
                        <div className="w-260 h-52 bg-black-200 px-2 mobile:w-full mobile:h-48">
                            <input
                                type="text"
                                className="w-full h-full bg-transparent outline-none text-white"
                            />
                        </div>
                    </div>
                    <div className="mt-28 mobile:mt-20">
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
                <Button
                    whileTap={{
                        scale: 0.9
                    }}
                    className="w-180 h-60 mobile:w-160 mobile:h-54 bg-blue-700 mt-48 rounded-30 flex justify-center items-center text-18 mobile:text-base leading-1 font-bold text-white "
                >
                    보내기
                </Button>
            </div>
        </IntersectionObserver>
    )
}

const Button = styled(motion.div)`
    &:hover {
        cursor: pointer;
    }
`;