"use client";
import { supportedEvents } from "@/config/zupass-config";
import { openZKEdDSAEventTicketPopup, useZupass } from "@/utils/zupass";
import { ITicketData } from "@pcd/eddsa-ticket-pcd";
import { useCallback, useEffect, useState } from "react";
import SignInWithZupass from "./SignInWithZupass";

export default function AuthButton({
  onAuth
}: {
  onAuth: (data: Partial<ITicketData>) => void;
}) {
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (isLoading) {
        const nonce = await (
          await fetch("/api/nonce", { credentials: "include" })
        ).text();

        setLoading(false);

        openZKEdDSAEventTicketPopup(
          {
            revealAttendeeEmail: true,
            revealAttendeeName: true
          },
          BigInt(nonce),
          supportedEvents,
          []
        );
      }
    })();
  }, [isLoading]);

  const { state } = useZupass({ onAuth });

  const onClick = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <SignInWithZupass
      onClick={onClick}
      loading={isLoading || state === "verifying"}
    ></SignInWithZupass>
  );
}
