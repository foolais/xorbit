"use client";

import FormSignIn from "@/components/form-sign-in";
import FormSignUp from "@/components/form-sing-up";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <Card className="w-full md:w-1/4 max-w-[450px]">
        <CardHeader className="text-center">
          <Image
            src="/logo.png"
            alt="Xorbit Logo"
            width={70}
            height={70}
            className="mx-auto mb-2"
          />
          <CardTitle className="text-3xl">
            {isSignIn ? "Sign In to Xorbit" : "Create an Account"}
          </CardTitle>
          <CardDescription>
            Access your account and explore the features
          </CardDescription>
        </CardHeader>
        <CardContent>{isSignIn ? <FormSignIn /> : <FormSignUp />}</CardContent>
        <CardFooter>
          <div className="mx-auto">
            <span>
              {isSignIn ? "Don't have an account?" : "Already have an account?"}
            </span>
            <Button
              variant="link"
              className="cursor-pointer font-semibold w-max"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default AuthPage;
