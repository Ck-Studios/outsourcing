import {motion} from "framer-motion";
import {useContext, useMemo} from "react";
import {IntersectionContext} from "components/common/utils/IntersectionObserver";

export default function IntersectionView({children, style, className, variants, delayOrder, duration = 0.3, easing = [0.42, 0, 0.58, 1]}) {
    const {inView} = useContext(IntersectionContext);
    const transition = useMemo(() => ({
        duration,
        delay: delayOrder / 5,
        ease: easing
    }), [duration, delayOrder, easing]);

    return (
        <motion.div
            style={style}
            className={className}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            exit="exit"
            variants={variants}
        >
            {children}
        </motion.div>
    );
}