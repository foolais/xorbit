import ProfileCard from "@/components/profile-card";
import StoriesSlider from "@/components/stories-slider";

const DashboardPage = () => {
  return (
    <main className="mx-auto flex justify-between gap-4">
      <section className="min-w-[300px]">
        <ProfileCard />
      </section>
      <section className="flex-1 max-w-[850px] w-full mx-auto">
        <StoriesSlider />
      </section>
      <section className="w-1/5 min-w-[300px]">{/* Tesa */}</section>
    </main>
  );
};

export default DashboardPage;
