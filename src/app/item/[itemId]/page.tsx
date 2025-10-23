import { EntryDialog } from "@/components/EntryDialog";
import { Suspense } from "react";

export default function ItemPage() {
  // Suspense used because of useSearchParams
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">
        The details for this item would be shown here.
      </h1>

      <Suspense fallback={null}>
        <EntryDialog />
      </Suspense>
    </div>
  );
}
