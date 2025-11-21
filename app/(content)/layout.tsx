import ContentHeader from "@/components/header";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-dvh">
      <ContentHeader />
      {children}
    </div>
  );
};

export default ContentLayout;
