import { supabase } from "@/lib/initSupabase";
import { withSessionRoute } from "@/utils/withSession";
import { ZKEdDSAEventTicketPCDPackage } from "@pcd/zk-eddsa-event-ticket-pcd";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * The login checks the validity of the PCD and ensures that the ticket
 * has been issued by Zupass. The watermark used to create the PCD must equal
 * the nonce of the current session.
 * The PCD nullifier is saved to prevent the same PCD from being used for another login.
 */
export default withSessionRoute(async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.body.pcd) {
      console.error(`[ERROR] No PCD specified`);

      res.status(400).send("No PCD specified");
      return;
    }

    const pcd = await ZKEdDSAEventTicketPCDPackage.deserialize(req.body.pcd);

    if (!(await ZKEdDSAEventTicketPCDPackage.verify(pcd))) {
      console.error(`[ERROR] ZK ticket PCD is not valid`);

      res.status(401).send("ZK ticket PCD is not valid");
      return;
    }

    if (pcd.claim.watermark.toString() !== req.session.nonce) {
      console.error(`[ERROR] PCD watermark doesn't match`);

      res.status(401).send("PCD watermark doesn't match");
      return;
    }

    const { attendeeEmail, attendeeName } = pcd.claim.partialTicket;
    let ticketId: string | undefined = undefined;

    try {
      const badge = await supabase
        .from("badges")
        .select("*")
        .ilike("email", `${attendeeEmail}`)
        .single();
      ticketId = badge.data.id;
    } catch (e) {
      console.log(e);
    }

    if (ticketId) {
      // Save the ticket's data.
      req.session.ticketId = ticketId;
      req.session.attendeeEmail = attendeeEmail;
      req.session.attendeeName = attendeeName;

      await req.session.save();
    }

    res.status(200).send({
      attendeeName,
      attendeeEmail,
      ticketId
    });
  } catch (error: any) {
    console.error(`[ERROR] ${error.message}`);

    res.status(500).send(`Unknown error: ${error.message}`);
  }
});
