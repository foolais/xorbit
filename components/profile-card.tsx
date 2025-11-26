import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import AvatarImage from "@/public/avatar.jpg";
import HeaderImage from "@/public/header.jpg";
import { Button } from "./ui/button";

const ProfileCard = () => {
  return (
    <Card className="min-w-[300px]">
      <CardHeader>
        <div className=" w-full h-32 relative">
          <Image
            src={HeaderImage}
            alt="header"
            className="w-full h-full rounded-xl object-cover"
          />
          <Image
            src={AvatarImage}
            alt="Avatar"
            className="object-cover absolute -bottom-4 translate-y-1/2 left-1/2 -translate-x-1/2 bg-card rounded-xl p-2 w-20 h-20"
          />
          <div className="absolute left-0 mt-2 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold">2000</span>
            <span className="text-muted-foreground font-medium text-sm">
              Followers
            </span>
          </div>
          <div className="absolute right-0 mt-2 flex flex-col items-center justify-center">
            <span className="text-lg font-semibold">2025</span>
            <span className="text-muted-foreground font-medium text-sm">
              Following
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-center mt-12 flex flex-col gap-1">
        <h2 className="text-xl text-foreground font-semibold">Xorbit User</h2>
        <span className="text-sm font-medium text-muted-foreground">
          @xorbit
        </span>
        <span className="text-sm mt-4">💡Hello Xorbit</span>
      </CardContent>
      <CardFooter>
        <Button className="w-full">My Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
