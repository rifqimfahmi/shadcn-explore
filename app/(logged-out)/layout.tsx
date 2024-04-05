import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface LoggedOutLayoutProps {
    children: ReactNode
}

const LoggedOutLayout = ({children}: LoggedOutLayoutProps) => {
    return (
        <div className={cn('flex flex-col min-h-screen items-center justify-center gap-4')}>
            {children}
        </div>
    );
};

export default LoggedOutLayout