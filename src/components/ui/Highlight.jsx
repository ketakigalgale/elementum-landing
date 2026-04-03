export const Highlight = ({ children, color = "bg-brand-green" }) => (
  <span className="relative inline-block px-2">
    <span
      className={`absolute inset-0 ${color} opacity-40 rounded-full -rotate-1`}
    />
    <span className="relative z-10">{children}</span>
  </span>
);
