import { ITicketData } from "@pcd/eddsa-ticket-pcd";
import { useZupassPopupMessages } from "@pcd/passport-interface";
import { useEffect, useState } from "react";

type PartialTicketData = Partial<ITicketData>;

export type ProvingState = "initial" | "verifying" | "verified" | "error";

export function useZupass({
  onAuth
}: {
  onAuth: (ticketData: PartialTicketData) => void;
}): {
  ticketData: PartialTicketData | undefined;
  state: ProvingState;
} {
  const [pcdStr, pendingPCDStr] = useZupassPopupMessages();
  console.log(pcdStr, pendingPCDStr);
  const [ticketData, setTicketData] = useState<PartialTicketData | undefined>(
    undefined
  );
  const [state, setState] = useState<ProvingState>("initial");

  useEffect(() => {
    (async () => {
      if (pcdStr && !ticketData) {
        setState("verifying");
        const response = await fetch("/api/login", {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          },
          body: pcdStr
        });

        if (response.status === 200) {
          const data = await response.json();
          setTicketData(data);
          onAuth(data);
          setState("verified");
        }
      }
    })();
  }, [onAuth, pcdStr, ticketData]);

  return { state, ticketData };
}
