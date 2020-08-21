import {useRouter} from "next/router";

const menu = [
    {title: "소개", link: "/"},
    {title: "포트폴리오", link: "/portfolio"},
    {title: "진행방식", link: "/process"},
    {title: "서비스안내", link: "/service"},
    {title: "사람들", link: "/team"},
]

export default function Header() {
    const router = useRouter();

    return (
        <div className="w-full h-72 bg-black-100">
            <div className="max-w-1080 h-full mx-auto flex justify-between items-center">
                <img
                    onClick={() => router.push("/")}
                    src="/static/images/logo.png"
                    className="object-contain w-124 h-28"
                />
                <div className="flex items-center">
                    {menu.map((item, index) => (
                        <div
                            onClick={() => router.push(item.link)}
                            className={`text-base text-bold leading1 text-white ${index > 0 && "ml-40"}`}
                            key={index.toString()}
                        >
                            {item.title}
                        </div>
                    ))}

                    <div className="ml-40 rounded-22 bg-blue-700 w-108 h-44 flex items-center justify-center text-white leading1">
                        문의하기
                    </div>
                </div>
            </div>
        </div>
    )
}