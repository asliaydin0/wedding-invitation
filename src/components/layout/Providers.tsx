"use client";

import { AudioProvider } from "@/hooks/useAudio";
import { InvitationProvider } from "@/hooks/useInvitation";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InvitationProvider>
      <AudioProvider>{children}</AudioProvider>
    </InvitationProvider>
  );
}
