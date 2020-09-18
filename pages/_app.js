import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "../styles/globals.css"
import "styles/index.css";
import {Provider} from "react-redux";
import {useStore} from "client/store/store";
import {useEffect} from "react";
import "swiper/swiper-bundle.min.css"
import {setAuthToken} from "client/network/axiosClient";
import Head from "next/head";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);
    const router = useRouter();

    useEffect(() => {
        setAuthToken();
    }, []);

    useEffect(() => {
        if(window) {
            window.scroll(0, 1)
        }
    }, [router.pathname])
    return (
        <>
            <Head>
                <title>
                    시냅스코퍼레이션 - 결이 다른 외주 서비스
                </title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <style global jsx>
                {
                    `
                    #__next {
                        width: 100%;
                        overflow: scroll;
                    }
                    #__next-build-watcher,
                    #__next-prerender-indicator {
                        display: none !important;
                    }
                    
                    a:hover {
                        cursor: pointer;
                    }
                    `
                }
            </style>
        </>
    )
}

export default MyApp
