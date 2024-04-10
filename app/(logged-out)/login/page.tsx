"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {PersonStandingIcon} from "lucide-react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export default function LoginPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSubmit = () => {
        console.log("form is valid")
    }

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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className={'flex flex-col gap-4'}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="rifqi@dev.com" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the email address you signed up to SupportMe with
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type={'submit'}>Login</Button>
                        </form>
                    </Form>
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