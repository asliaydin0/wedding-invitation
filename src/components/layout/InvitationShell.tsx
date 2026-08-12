/**
 * Constrains invitation to a phone-like column on desktop,
 * full-bleed atmosphere on mobile — never horizontal overflow.
 */
export function InvitationShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative mx-auto min-h-screen-mobile w-full max-w-invitation overflow-x-clip bg-atmosphere shadow-lift"
      style={{
        paddingLeft: "var(--safe-left)",
        paddingRight: "var(--safe-right)",
      }}
    >
      {children}
    </div>
  );
}
