export function PinBoard({
  title,
  kicker,
}: {
  title: string;
  kicker: string;
}) {
  return (
    <div className="aspect-[2/3] w-full bg-forest p-8 text-cream">
      <div className="flex h-full flex-col justify-between border border-gold/50 p-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold">{kicker}</p>
        <div>
          <p className="font-serif text-3xl leading-tight">{title}</p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-cream/70">
            Merry &amp; Cozy
          </p>
        </div>
      </div>
    </div>
  );
}
