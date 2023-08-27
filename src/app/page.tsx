import Box from "@/components/Box";
import LeftNavigation from "@/components/LeftNavigation";

export default function Home() {
  return (
    <div className="bg-green-500 flex">
      <LeftNavigation />
      <Box />
      <Box />
    </div>
  );
}
