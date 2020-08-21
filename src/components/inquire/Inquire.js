export default function Inquire() {
    return (
        <div className="max-w-1080 mx-auto">
                    <span className="text-white text-40 font-bold" style={{
                        background: "linear-gradient(to right, #1bacff, #1d5aff, #764aff)",
                        "-webkit-background-clip": "text",
                        "-webkit-text-fill-color": "transparent"
                    }}>
                        상상하던 서비스를 구현해보세요.
                    </span>
            <p className="mt-28 text-white leading-1 text-base">
                상상하는 서비스를 실제로 구현해보세요.<br/>
                문의를 남겨주시면 1영업일 내에 연락드리겠습니다.
            </p>

            <div className="w-540 mt-60">
                <div className="flex">
                    <div>
                        <p className="mb-12 text-white leading-1 text-base font-bold">
                            이름
                        </p>
                        <div className="w-260 h-52 bg-black-200 px-2">
                            <input
                                type="text"
                                className="w-full h-full bg-transparent outline-none text-white"
                            />
                        </div>
                    </div>

                    <div className="ml-20">
                        <p className="mb-12 text-white leading-1 text-base font-bold">
                            휴대폰
                        </p>
                        <div className="w-260 h-52 bg-black-200 px-2">
                            <input
                                type="text"
                                className="w-full h-full bg-transparent outline-none text-white"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-28">
                    <p className="mb-12 text-white leading-1 text-base font-bold">
                        이메일
                    </p>
                    <div className="w-full h-52 bg-black-200 px-2">
                        <input
                            type="text"
                            className="w-full h-full bg-transparent outline-none text-white"
                        />
                    </div>
                </div>
                <div className="mt-28">
                    <p className="mb-12 text-white leading-1 text-base font-bold">
                        원하시는 서비스의 구체적인 내용
                    </p>
                    <div className="w-full h-160 bg-black-200 px-2">
                                <textarea
                                    className="w-full h-full bg-transparent outline-none text-white resize-none"
                                />
                    </div>
                </div>
            </div>
            <div
                className="w-180 h-60 bg-blue-700 mt-48 rounded-30 flex justify-center items-center text-18 leading-1 font-bold text-white">
                보내기
            </div>
        </div>
    )
}