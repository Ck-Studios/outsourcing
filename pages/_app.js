import '../styles/globals.css'
import "styles/index.css";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <style global jsx>
                {
                    `
                    #__next {
                        width: 100%;
                        height: 100%;
                        overflow: scroll;
                    }
                    #__next-build-watcher,
                    #__next-prerender-indicator {
                        display: none !important;
                    }
                    `
                }
            </style>
        </>
    )
}

export default MyApp
