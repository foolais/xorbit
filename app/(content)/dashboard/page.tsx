import ProfileCard from "@/components/profile-card";

const DashboardPage = () => {
  return (
    <main className="w-11/12 mx-auto py-4 flex justify-between gap-4">
      <section className="w-1/5 min-w-[300px]">
        <ProfileCard />
      </section>
    </main>
  );
};

export default DashboardPage;
