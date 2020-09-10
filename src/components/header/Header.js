import {useRouter} from "next/router";
import styled from "styled-components";
import {motion, useCycle} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu, openMenu} from "modules/common";
import {ToggleMenu} from "common/ToggleMenu";

const menu = [
    {title: "소개", link: "/"},
    {title: "포트폴리오", link: "/portfolio"},
    {title: "진행방식", link: "/process"},
    {title: "서비스안내", link: "/service"},
    {title: "사람들", link: "/team"},
]

export default function Header(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const isOpened = useSelector(state => state?.common?.openMenu);


    return (
        <>
            <div className="w-full h-72 bg-black-100 desktop:min-w-1440 mobile:min-w-360">
                <div className="max-w-1080 h-full mx-auto flex justify-between items-center mobile:hidden">
                    <Image
                        onClick={() => router.push("/")}
                        src="/static/images/logo.png"
                        className="object-contain w-124 h-28"
                    />
                    <div className="flex items-center">
                        {menu.map((item, index) => (
                            <Button
                                onClick={() => router.push(item.link)}
                                className={`text-base text-bold leading1 text-white ${index > 0 && "ml-40"}`}
                                key={index.toString()}
                            >
                                {item.title}
                            </Button>
                        ))}

                        <Button
                            whileTap={{
                                scale: 0.9
                            }}
                            onClick={() => window?.scrollTo(0,document?.body?.scrollHeight)}
                            className="ml-40 rounded-22 bg-blue-700 w-108 h-44 flex items-center justify-center text-white leading1">
                            문의하기
                        </Button>
                    </div>
                </div>

                <div className="desktop:hidden w-full h-60 flex justify-between items-center px-20">
                    <Image
                        onClick={() => router.push("/")}
                        src="/static/images/logo.png"
                        className="object-contain w-100 h-24"
                    />
                    {/*<div*/}
                    {/*    className="w-32 h-32 bg-pink-500"*/}
                    {/*    onClick={() => dispatch(openMenu())}*/}
                    {/*/>*/}
                    <ToggleMenu
                        toggle={isOpened ? () => dispatch(closeMenu()) : () => dispatch(openMenu())}
                        isOpened={isOpened}
                    />

                </div>
            </div>
        </>
    )
}

const Image = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

const Button = styled(motion.div)`
    &:hover {
        cursor: pointer;
    }
`;