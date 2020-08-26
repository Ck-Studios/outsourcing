const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/**/*.{js, ts, jsx, tsx}',],
    theme: {
        extend: {
            colors: {
                blue: {
                    ...colors.blue,
                    '700': "#0057ff",
                },
                gray: {
                    ...colors.gray,
                    '400': "#b1b1c1",
                },
                black: {
                    ...colors.black,
                    '100': "#111111",
                    '200': "#1c1c1f"
                }
            },
            height: {
                44: "44px",
                52: "52px",
                54: "54px",
                60: "60px",
                72: "72px",
                100: "100px",
                160: "160px",
                199: "199px",
                200: "200px",
                201: "201px",
                220: "220px",
                250: "250px",
                278: "278px",
                280: "280px",
                290: "290px",
                300: "300px",
                318: "318px",
                320: "320px",
                334: "334px",
                345: "345px",
                360: "360px",
                430: "430px",
                438: "438px",
                450: "450px",
                480: "480px",
                500: "500px",
                564: "564px",
                700: "700px",
                594: "594px",
                688: "688px",
                740: "740px",
            },
            width: {
                54: "54px",
                100: "100px",
                108: "108px",
                120: "120px",
                124: "124px",
                180: "180px",
                199: "199px",
                200: "200px",
                201: "201px",
                220: "220px",
                234: "234px",
                260: "260px",
                267: "267px",
                278: "278px",
                280: "280px",
                306: "306px",
                318: "318px",
                320: "320px",
                420: "420px",
                440: "440px",
                480: "480px",
                500: "500px",
                540: "540px",
                683: "683px",
                780: "780px",
                1080: "1080px",
                360: "360px"
            },
            maxWidth: {
                1080: "1080px"
            },

            minWidth: {
                1080: "1080px",
                1440: "1440px",
                360: "360px"
            },
            lineHeight: {
                'tight1': "1.3",
                'base': "1.35",
                'leading1': "1.5",
                'leading2': "1.63",
                'leading3': "1.9",
                '1.4': "1.4",
                '1.75': "1.75"
            },
            fontSize: {
                10: "10px",
                12: "12px",
                14: "14px",
                18: "18px",
                20: "20px",
                22: "22px",
                24: "24px",
                26: "26px",
                32: "32px",
                36: "36px",
                40: "40px",
                20: "20px",
            },
            borderRadius: {
                16: "16px",
                22: "22px",
                30: "30px",
            },
            spacing: {
                8: "8px",
                12: "12px",
                20: "20px",
                24: "24px",
                26: "26px",
                28: "28px",
                30: "30px",
                32: "32px",
                40: "40px",
                48: "48px",
                50: "50px",
                60: "60px",
                80: "80px",
                88: "88px",
                100: "100px",
                114: "114px",
                112: "112px",
                120: "120px",
                140: "140px",
                150: "150px",
                160: "160px",
                170: "170px",
                183: "183px",
                186: "186px",
                188: "188px",
                194: "194px",
                240: "240px",
                275: "275px",
            },
            inset: {
                "1/2": "50%",
                "20": "20px",
                "24": "24px",
                "199.5": "199.5px",
                "410.5": "410.5px",
                "690.5": "690.5px",
                "970.5": "970.5px",
            }
        },
        screens: {
            'mobile': {'max': '1023px'},
            'desktop': {'min': '1024px'},
        },
    },
    variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundOpacity: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderOpacity: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        boxSizing: ['responsive'],
        clear: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        divideColor: ['responsive'],
        divideOpacity: ['responsive'],
        divideWidth: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        gap: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridColumnStart: ['responsive'],
        gridRow: ['responsive'],
        gridRowEnd: ['responsive'],
        gridRowStart: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridTemplateRows: ['responsive'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive', 'hover', 'focus'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        placeholderColor: ['responsive', 'focus'],
        placeholderOpacity: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        rotate: ['responsive', 'hover', 'focus'],
        scale: ['responsive', 'hover', 'focus'],
        skew: ['responsive', 'hover', 'focus'],
        space: ['responsive'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textOpacity: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        transitionDelay: ['responsive'],
        transitionDuration: ['responsive'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        translate: ['responsive', 'hover', 'focus'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
    },
    plugins: [],
}