import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { CardSummary } from "./components/CardSummary/CardSummary";
import { UsersRound } from "lucide-react";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary
          icon={UsersRound}
          total="12.450"
          average={15}
          title="Total Companies"
          tooltipText="This is the total number of companies in your dashboard"
        />
        <div>Card Summary</div>
        <div>Card Summary</div>
      </div>
    </div>
  );
}
