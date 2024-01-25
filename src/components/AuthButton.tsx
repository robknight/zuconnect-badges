"use client";
import { useZupass } from "@/utils/zupass";
import { ITicketData } from "@pcd/eddsa-ticket-pcd";
import { EmailPCDTypeName } from "@pcd/email-pcd";
import { getWithoutProvingUrl, openZupassPopup } from "@pcd/passport-interface";
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
        setLoading(false);

        const popupUrl = window.location.origin + "/popup";
        const getUrl = getWithoutProvingUrl(
          process.env.NEXT_PUBLIC_ZUPASS_URL as string,
          popupUrl,
          EmailPCDTypeName
        );

        window.setTimeout(() => openZupassPopup(popupUrl, getUrl), 0);
      }
    })();
  }, [isLoading]);

  const { state } = useZupass({ onAuth });
  console.log(state);

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
