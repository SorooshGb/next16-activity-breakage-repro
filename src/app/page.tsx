import { ItemDropdown } from "@/components/ItemDropdown";

export default function HomePage() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Home Page</h1>
      <div className="mx-auto w-fit grid gap-8">
        <ItemDropdown />
      </div>
    </div>
  );
}
