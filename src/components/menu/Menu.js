import {useDispatch} from "react-redux";
import {closeMenu} from "modules/common";
import {MENU_SET} from "common/set";
import {useRouter} from "next/router";
import {motion} from "framer-motion";
import {BORDERED_SCALE_UP, SCALE_UP} from "components/common/animation/Animation";
import Header from "components/header/Header";

export default function Menu(props) {
    const dispatch = useDispatch();
    const router = useRouter();
    const currentPath = router?.pathname;

    const sidebarVariants = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            duration: 1,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(0px at 40px 40px)",
            duration: 0.5,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const wrapperVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const menuVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    const navigate = (path) => {
        dispatch(closeMenu());
        router.push(path);
    }

    const renderMenu = (menu, index) => {
        if (menu.type === "button") {
            return (
                <motion.div
                    variants={menuVariants}
                    key={index.toString()}
                    whileTap={{
                        scale: 0.9
                    }}
                    className="w-108 h-44 bg-blue-700 mt-48 rounded-30 flex justify-center items-center text-18 mobile:text-base leading-1 text-white "
                >
                    {menu?.title}
                </motion.div>
            )
        } else {
            return (
                <motion.p
                    onClick={() => navigate(menu.path)}
                    key={index.toString()}
                    variants={menuVariants}
                    className={`text-base mt-40 ${menu.path === currentPath ? "text-white font-bold" : "text-gray-400"}`}
                >
                    {menu?.title}
                </motion.p>
            )
        }
    }

    return (
        <motion.div
            className={`bg-black-100 fixed top-0 left-0 bottom-0 right-0 z-30`}
            variants={sidebarVariants}
            initial={false}
            animate={props.isOpened ? "open" : "closed"}
        >
            <Header/>
            <motion.div
                className="flex flex-col items-center"
                variants={wrapperVariants}
            >

                {
                    MENU_SET.map((menu, index) => renderMenu(menu, index))
                }
            </motion.div>
        </motion.div>
    )
}