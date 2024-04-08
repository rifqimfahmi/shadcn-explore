import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {PersonStandingIcon} from "lucide-react";

export default function LoginPage() {
    return (
        <>
            <PersonStandingIcon size={50} className={'text-pink-500'}/>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Pay SupportMe through here easily.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/*<p>Form content here</p>*/}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <small>Don't have an account?</small>
                    <Button asChild variant={'outline'} size={"sm"}>
                        <Link href={'/sign-up'}>Sign Up</Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}