import ContentHeader from "@/components/header";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1500px] mx-auto h-dvh">
      <ContentHeader />
      {children}
    </div>
  );
};

export default ContentLayout;
