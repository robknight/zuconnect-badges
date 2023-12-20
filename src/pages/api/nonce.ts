import { withSessionRoute } from "@/utils/withSession";
import { hexToBigInt } from "@pcd/util";
import cryptoRandomString from "crypto-random-string";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
  interface IronSessionData {
    nonce?: string;
    attendeeEmail?: string;
    attendeeName?: string;
    ticketId?: string;
  }
}

/**
 * The nonce is a value used in the authentication mechanism and as a
 * watermark in the EdDSA ticket. Its value is generated randomly and saved
 * in the current session.
 */
export default withSessionRoute(async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    req.session.nonce = hexToBigInt(
      cryptoRandomString({ length: 16 })
    ).toString();

    await req.session.save();

    res.status(200).send(req.session.nonce);
  } catch (error: any) {
    console.error(`[ERROR] ${error}`);

    res.status(500).send(`Unknown error: ${error.message}`);
  }
});
