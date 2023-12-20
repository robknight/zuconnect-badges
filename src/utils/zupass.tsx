import { EdDSATicketPCDPackage, ITicketData } from "@pcd/eddsa-ticket-pcd";
import {
  constructZupassPcdGetRequestUrl,
  openZupassPopup,
  useZupassPopupMessages
} from "@pcd/passport-interface";
import { ArgumentTypeName } from "@pcd/pcd-types";
import { SemaphoreIdentityPCDPackage } from "@pcd/semaphore-identity-pcd";
import {
  EdDSATicketFieldsToReveal,
  ZKEdDSAEventTicketPCDArgs,
  ZKEdDSAEventTicketPCDPackage
} from "@pcd/zk-eddsa-event-ticket-pcd";
import { useEffect, useState } from "react";

/**
 * Opens a Zupass popup to make a proof of a ZK EdDSA event ticket PCD.
 */
export function openZKEdDSAEventTicketPopup(
  fieldsToReveal: EdDSATicketFieldsToReveal,
  watermark: bigint,
  validEventIds: string[],
  validProductIds: string[]
) {
  const args: ZKEdDSAEventTicketPCDArgs = {
    ticket: {
      argumentType: ArgumentTypeName.PCD,
      pcdType: EdDSATicketPCDPackage.name,
      value: undefined,
      userProvided: true,
      validatorParams: {
        eventIds: validEventIds,
        productIds: validProductIds,
        notFoundMessage: "No eligible PCDs found"
      }
    },
    identity: {
      argumentType: ArgumentTypeName.PCD,
      pcdType: SemaphoreIdentityPCDPackage.name,
      value: undefined,
      userProvided: true
    },
    validEventIds: {
      argumentType: ArgumentTypeName.StringArray,
      value: validEventIds.length != 0 ? validEventIds : undefined,
      userProvided: false
    },
    fieldsToReveal: {
      argumentType: ArgumentTypeName.ToggleList,
      value: fieldsToReveal,
      userProvided: false
    },
    watermark: {
      argumentType: ArgumentTypeName.BigInt,
      value: watermark.toString(),
      userProvided: false
    },
    externalNullifier: {
      argumentType: ArgumentTypeName.BigInt,
      value: watermark.toString(),
      userProvided: false
    }
  };

  const popupUrl = window.location.origin + "/popup";

  const proofUrl = constructZupassPcdGetRequestUrl(
    process.env.NEXT_PUBLIC_ZUPASS_URL as string,
    popupUrl,
    ZKEdDSAEventTicketPCDPackage.name,
    args,
    {
      genericProveScreen: true,
      title: "ZKEdDSA Ticket Proof",
      description: "ZKEdDSA Ticket PCD Request"
    }
  );

  openZupassPopup(popupUrl, proofUrl);
}

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
  const [pcdStr] = useZupassPopupMessages();
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
