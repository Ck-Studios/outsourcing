const defaultEase = [0.48, 0.15, 0.25, 0.48];

export const SCALE_UP = (delay=0) => ({
    initial: {
        opacity: 0,
        scale: 0.5,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            delay,
            duration: 0.8, ease: defaultEase
        }
    },
    exit: {
        opacity: 1,
        scale: 0.7,
        transition: {
            duration: 0.5, ease: defaultEase
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

