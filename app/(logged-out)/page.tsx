import {Button} from "@/components/ui/button";
import {PersonStandingIcon} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className={'flex gap-2 items-center'}>
                <PersonStandingIcon size={50} className={'text-pink-500'}/> Support Me
            </h1>
            <p>The best crypto portfolio management</p>
            <div className={'flex gap-2 items-center'}>
                <Button asChild>
                    <Link href={'/login'}>Login</Link>
                </Button>
                <small>or</small>
                <Button variant={'outline'} asChild>
                    <Link href={'/sign-up'}>
                        Sign up
                    </Link>
                </Button>
            </div>
        </>
    );
}
