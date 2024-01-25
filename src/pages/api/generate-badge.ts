import { withSessionRoute } from "@/utils/withSession";
import { EdDSAPCDPackage } from "@pcd/eddsa-pcd";
import {
  EdDSATicketPCDPackage,
  ITicketData,
  TicketCategory
} from "@pcd/eddsa-ticket-pcd";
import { ArgumentTypeName } from "@pcd/pcd-types";
import { NextApiRequest, NextApiResponse } from "next";

const BADGE_EVENT_ID = "827e7941-8b5d-4ff4-bf80-e8b9dc250960";
const BADGE_PRODUCT_ID = "8f2645e0-9acc-4143-a6ad-ba12e6d882b6";

export default withSessionRoute(async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  await EdDSAPCDPackage.init?.({});
  await EdDSATicketPCDPackage.init?.({});
  const host = req.headers.host;
  const scheme = process.env.NODE_ENV === "development" ? "http" : "https";

  const ticketData: ITicketData = {
    attendeeName: req.session.attendeeName as string,
    attendeeEmail: req.session.attendeeEmail as string,
    eventName: "Vitalia",
    ticketName: "Attendee",
    checkerEmail: "",
    // the fields below are signed using the server's private eddsa key
    ticketId: req.session.ticketId as string,
    eventId: BADGE_EVENT_ID,
    productId: BADGE_PRODUCT_ID,
    timestampSigned: Date.now(),
    timestampConsumed: 0,
    attendeeSemaphoreId: req.session.semaphoreId as string,
    isConsumed: false,
    isRevoked: false,
    ticketCategory: TicketCategory.Generic,
    imageUrl: `${scheme}://${host}/badges/vitalia.jpg`,
    imageAltText: "Vitalia Badge"
  };

  const prvKey = process.env.PRIVATE_KEY;

  const pcd = await EdDSATicketPCDPackage.prove({
    ticket: {
      value: ticketData,
      argumentType: ArgumentTypeName.Object
    },
    privateKey: {
      value: prvKey,
      argumentType: ArgumentTypeName.String
    },
    id: {
      value: ticketData.ticketId,
      argumentType: ArgumentTypeName.String
    }
  });

  res.status(200).send({
    pcd: JSON.stringify(await EdDSATicketPCDPackage.serialize(pcd))
  });
});
