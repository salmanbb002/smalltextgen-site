const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" });

export function LastUpdated({ date }: { date: string }) {
  const formatted = formatter.format(new Date(`${date}T00:00:00Z`));
  return (
    <p className="freshness-note">
      Last updated <time dateTime={date}>{formatted}</time>
    </p>
  );
}
