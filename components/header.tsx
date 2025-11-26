import Image from "next/image";
import Logo from "@/public/logo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Bell, ChevronDown, Heart, Home, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ThemeButton from "./theme-button";

const ContentHeader = () => {
  const navClassName = "cursor-pointer text-primary";

  return (
    <div className="w-11/12 flex items-center justify-between py-4 mx-auto">
      <section className="flex items-center justify-center gap-4 w-1/5 min-w-[300px]">
        <Image src={Logo} alt="logo" width={40} height={40} />
        <Input placeholder="Cari disini..." className="w-full" />
      </section>
      <section className="flex items-center gap-4">
        <Button size="icon-sm" variant="outline" className={navClassName}>
          <Home />
        </Button>
        <Button size="icon-sm" variant="outline" className={navClassName}>
          <MessageCircle />
        </Button>
        <Button size="icon-sm" variant="outline" className={navClassName}>
          <Bell />
        </Button>
        <Button size="icon-sm" variant="outline" className={navClassName}>
          <Heart />
        </Button>
      </section>
      <section className="flex items-center gap-4">
        <ThemeButton />
        <div className="border-[1] rounded-full flex items-center gap-1 pr-2 cursor-pointer hover:bg-muted">
          <Avatar>
            <AvatarImage src="" alt="xorbit" />
            <AvatarFallback>XB</AvatarFallback>
          </Avatar>
          <span className="text-sm text-foreground">Xorbit User</span>
          <ChevronDown className="size-4" />
        </div>
      </section>
    </div>
  );
};

export default ContentHeader;
