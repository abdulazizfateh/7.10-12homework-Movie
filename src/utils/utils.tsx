import React, { type ReactNode } from "react";
import "./utils.css";
// Icons
import Logo1 from "@/assets/images/logo-part-1.svg"
import Logo2 from "@/assets/images/logo-part-2.svg"
import Logo3 from "@/assets/images/logo-part-3.svg"

interface Props {
    children: ReactNode;
}

export const Loading = () => {
    const storedTheme = localStorage.getItem("theme");
    const theme: boolean = storedTheme ? JSON.parse(storedTheme) : false;
    return (
        <>
            <div className={`${theme ? "bg-bg-light-900" : "bg-bg-dark-900"} logo-loader`}>
                <img className="icon icon1" src={Logo1} alt="Logo" />
                <img className="icon icon2" src={Logo2} alt="Logo" />
                <img className="icon icon3" src={Logo3} alt="Logo" />
            </div>
        </>
    );
}

export const CustomSuspense = ({ children }: Props) => {
    return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
}