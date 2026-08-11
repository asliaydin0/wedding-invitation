/**
 * Constrains invitation to a phone-like column on desktop,
 * full-bleed atmosphere on mobile.
 */
export function InvitationShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-invitation overflow-x-hidden bg-atmosphere shadow-lift">
      {children}
    </div>
  );
}
