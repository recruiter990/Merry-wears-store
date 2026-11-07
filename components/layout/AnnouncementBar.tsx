import { announcement } from "@/content/site";

export function AnnouncementBar() {
  return (
    <div className="bg-forest text-cream">
      <p className="px-4 py-2 text-center text-[11px] tracking-[0.22em] uppercase">
        {announcement}
      </p>
    </div>
  );
}
