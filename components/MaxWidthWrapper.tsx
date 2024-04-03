import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface MaxWidthWrapperType {
    className?: string,
    children: ReactNode
}

export const MaxWidthWrapper = ({className, children}: MaxWidthWrapperType) => {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    );
};