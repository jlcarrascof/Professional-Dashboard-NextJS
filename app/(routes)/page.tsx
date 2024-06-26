import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h2>Dashboard</h2>
    </div>
  );
}
