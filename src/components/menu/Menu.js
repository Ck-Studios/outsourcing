import {useDispatch} from "react-redux";
import {closeMenu} from "modules/common";
import {MENU_SET} from "common/set";
import {useRouter} from "next/router";
import {motion} from "framer-motion";

export default function Menu() {
    const dispatch = useDispatch();
    const router = useRouter();
    const currentPath = router?.pathname;

    const navigate = (path) => {
        dispatch(closeMenu());
        router.push(path);
    }

    return (
        <div
            className="bg-black-100 w-full h-full fixed top-0 left-0 bottom-0 right-0 z-30"
        >
            <div
                className="flex justify-end px-20 items-center h-60 w-full"
            >
                <div
                    className="bg-white w-32 h-32"
                    onClick={() => dispatch(closeMenu())}
                />
            </div>

            <div
                className="flex flex-col items-center"
            >

                {
                    MENU_SET.map((menu, index) => (
                        <p
                            onClick={() => navigate(menu.path)}
                            key={index.toString()}
                            className={`text-base mt-40 ${menu.path === currentPath ? "text-white font-bold" : "text-gray-400"}`}
                        >
                            {menu?.title}
                        </p>
                    ))
                }

                <motion.div
                    whileTap={{
                        scale: 0.9
                    }}
                    className="w-108 h-44 bg-blue-700 mt-48 rounded-30 flex justify-center items-center text-18 mobile:text-base leading-1 text-white "
                >
                    문의하기
                </motion.div>
            </div>
        </div>
    )
}