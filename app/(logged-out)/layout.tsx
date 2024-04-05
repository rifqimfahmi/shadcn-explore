import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import {LightDarkToggle} from "@/components/ui/LightDarkToggle";

interface LoggedOutLayoutProps {
    children: ReactNode
}

const LoggedOutLayout = ({children}: LoggedOutLayoutProps) => {
    return (
        <>
            <div className={cn('flex flex-col min-h-screen items-center justify-center gap-4')}>
                {children}
            </div>
            <LightDarkToggle  className="fixed top-[calc(50%-12px)] right-2 -mt-3"/>
        </>
    );
};

export default LoggedOutLayout