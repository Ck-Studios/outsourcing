import {useRef, useState, useEffect} from "react";
import {useSelector} from "react-redux";
import Header from "components/header/Header";
import Menu from "components/menu/Menu";
import Footer from "components/footer/footer";
import {AnimatePresence, useCycle} from "framer-motion";
import {useDimensions} from "hooks/useDimensions";
import {useDispatch} from "react-redux";
import {motion} from "framer-motion";
import {OPEN_MENU} from "modules/common";

export default function LayoutWrapper({children}) {
    const isOpened = useSelector(state => state?.common?.openMenu);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const [height, setHeight] = useState(null)
    const containerRef = useRef(null);
    const dispatch = useDispatch();
    // const {height} = useDimensions(containerRef);

    useEffect(() => {
        if (window) {
            setHeight(window.innerHeight);
        }
    }, []);

    const sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            duration: 0.5,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 40px 40px)",
            duration: 0.5,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };


    // const openMenu = () => {
    //     dispatch(openMenu());
    // }
    return height && (
        <AnimatePresence exitBeforeEnter>
            <Header/>
            <Menu
                isOpened={isOpened}
            />

            {children}
            <Footer/>
        </AnimatePresence>
    )
}