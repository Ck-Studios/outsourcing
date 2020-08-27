const defaultEase = [0.48, 0.15, 0.25, 0.48];

export const BORDERED_SCALE_UP = (delay=0, duration=0.5) => ({
    initial: {
        opacity: 0.7,
        width: 250,
        height: 250,
        scale: 0.5,
        borderRadius: "50%",
    },

    animate: {
        opacity: 1,
        scale: 1,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        transition: {
            delay,
            duration,
            ease: defaultEase
        },
    },

    exit: {
        opacity: 0.7,
        scale: 0.5,
        width: 250,
        height: 250,
        borderRadius: "50%",
        transition: {
            delay,
            duration,
            ease: defaultEase
        }
    }
})

export const SCALE_UP = (delay=0, duration=0.5) => ({
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay,
            duration,
            ease: defaultEase
        }
    },
    exit: {
        opacity: 1,
        scale: 0.7,
        transition: {
            duration: duration,
            ease: defaultEase
        }
    }
})

export const FADE_IN = (delay) => ({
    initial: {
        opacity: 0,
    },

    animate: {
        opacity: 1,
        transition: {
            delay,
            duration: 0.5,
            ease: defaultEase
        }
    }
})


export const SLIDE_LEFT = {
    initial: {
        opacity: 0,
        x: -100,
    },

    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7, ease: [0.48, 0.15, 0.25, 0.96]
        }
    },
}

export const SLIDE_UP = (delay) => ({
    initial: {
        opacity: 0,
        y: 70,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 0.7, ease: [0.30, 0.15, 0.25, 0.48]
        }
    },
})

export const SLIDE_UP2 = (delay) => ({
    initial: {
        opacity: 0,
        y: 70,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 0.7, ease: [0.30, 0.4, 0.58, 0.96]
        }
    },
})

