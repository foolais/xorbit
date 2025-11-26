import Image from "next/image";
import { Card } from "./ui/card";
import AvatarPictures from "@/public/avatar.jpg";
import { truncateText } from "@/lib/utils";
import { Plus } from "lucide-react";

const dummyUsernames = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "Bob Brown",
  "Charlie Davis",
  "Eve Wilson",
  "Frank Miller",
  "Grace Lee",
  "Hank Taylor",
  "Ivy Anderson",
  "Jack Thomas",
  "Kathy Moore",
];

const CreateStoryItem = () => (
  <div className="flex flex-col items-center w-20 shrink-0 gap-2 cursor-pointer">
    <div className="relative w-16 h-16">
      <Image
        src={AvatarPictures}
        alt="Profile"
        fill
        className="object-cover rounded-full border border-primary p-1 transition-transform hover:scale-105"
      />
      <div className="absolute right-0 bottom-0 bg-primary rounded-full p-0.5">
        <Plus className="size-4 text-white" />
      </div>
    </div>
    <span className="text-xs font-medium text-center w-full">Your Story</span>
  </div>
);

const StoryItem = ({ username }: { username: string }) => (
  <div className="flex flex-col items-center w-20 shrink-0 gap-2 cursor-pointer">
    <div className="relative w-16 h-16">
      <Image
        src={AvatarPictures}
        alt={username}
        fill
        className="object-cover rounded-full border border-secondary p-1 transition-transform hover:scale-105"
      />
    </div>
    <span className="text-xs font-medium text-center w-full">
      {truncateText(username, 10)}
    </span>
  </div>
);

const StoriesSlider = () => {
  return (
    <Card className="px-4 py-2">
      <div className="flex items-center overflow-x-auto scrollbar-hide">
        <CreateStoryItem />
        {dummyUsernames.map((username) => (
          <StoryItem key={username} username={username} />
        ))}
      </div>
    </Card>
  );
};

export default StoriesSlider;
