"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const AuthPage = () => {
  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <Card className="w-1/4 max-w-[450px]">
        <CardHeader className="text-center">
          <Image
            src="/logo.png"
            alt="Xorbit Logo"
            width={70}
            height={70}
            className="mx-auto mb-2"
          />
          <CardTitle className="text-3xl">Sign in to your account</CardTitle>
          <CardDescription>
            Access your account and explore the features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full cursor-pointer">Sign In</Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default AuthPage;
