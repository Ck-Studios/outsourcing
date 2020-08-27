import '../styles/globals.css'
import "styles/index.css";
import {Provider} from "react-redux";
import {useStore} from "client/store/store";
import Menu from "components/menu/Menu";
import {useState, useEffect} from "react";
import "swiper/swiper-bundle.min.css"

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
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
