import ThemeButton from "@/components/theme-button";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="bg-background flex flex-col items-center justify-center gap-4 min-h-screen p-4">
      <h1>Welcome to the Home Page</h1>
      <Button>Hello Xorbit</Button>
      <ThemeButton />
    </main>
  );
}
