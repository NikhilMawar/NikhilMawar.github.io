export default function MobileContainer({
  children,
  className = "",
}) {
  return (
    <div
      className={`mx-auto w-full ${className}`}
      style={{
        maxWidth: "var(--mobile-max-width)",
        paddingInline: "var(--mobile-page-padding)",
      }}
    >
      {children}
    </div>
  );
}