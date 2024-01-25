import AddToZupass from "@/components/AddToZupass";
import AuthButton from "@/components/AuthButton";
import { EdDSAPCDPackage } from "@pcd/eddsa-pcd";
import { EdDSATicketPCDPackage, ITicketData } from "@pcd/eddsa-ticket-pcd";
import { constructZupassPcdAddRequestUrl } from "@pcd/passport-interface";

import axios from "axios";
import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useState } from "react";

const PlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

interface UserData {
  attendeeName?: string;
  attendeeEmail?: string;
  ticketId?: string;
  semaphoreId?: string;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const onAuth = useCallback((data: Partial<ITicketData>) => {
    setUserData(data);
  }, []);

  return (
    <main
      className={`container max-w-xl mx-auto my-4 text-[#fcfffe] ${PlexSans.className}`}
    >
      <Head>
        <title>Claim your Vitalia Badge</title>
      </Head>

      <div className="rounded-lg p-8 ">
        <h1
          className={`font-semibold text-4xl underline decoration-[#708e8c] mb-12 text-center`}
        >
          Claim your Vitalia Badge
        </h1>
        {userData &&
          userData.attendeeEmail !== undefined &&
          userData.attendeeName !== undefined &&
          userData.ticketId !== undefined && (
            <Claim
              attendeeEmail={userData.attendeeEmail}
              attendeeName={userData.attendeeName}
            />
          )}

        {userData &&
          userData.attendeeEmail !== undefined &&
          userData.attendeeName !== undefined &&
          !userData.ticketId && (
            <NoBadgeAvailable
              onAuth={onAuth}
              attendeeEmail={userData.attendeeEmail}
            />
          )}
        {!(
          userData &&
          userData.attendeeEmail !== undefined &&
          userData.attendeeName !== undefined
        ) && <Login onAuth={onAuth} />}
      </div>
    </main>
  );
}

function Login({ onAuth }: { onAuth: (data: Partial<ITicketData>) => void }) {
  return (
    <>
      <p className="my-8">
        To claim your badge, sign in with Zupass using the button below.
      </p>
      <div className="flex justify-center">
        <AuthButton onAuth={onAuth} />
      </div>
    </>
  );
}

function NoBadgeAvailable({
  onAuth,
  attendeeEmail
}: {
  onAuth: (data: Partial<ITicketData>) => void;
  attendeeEmail: string;
}) {
  return (
    <>
      <p className="my-8">
        No badge was found for <strong>{attendeeEmail}</strong>. If you have a
        ticket under another email address, you could sign in to Zupass under
        that email and try again.
      </p>
      <div className="flex justify-center">
        <AuthButton onAuth={onAuth} />
      </div>
    </>
  );
}

function Claim({
  attendeeName,
  attendeeEmail
}: {
  attendeeName: string;
  attendeeEmail: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  const addPCD = useCallback(async () => {
    // @todo exception-handling
    setLoading(true);
    const result = await axios.get("/api/generate-badge");
    if (result.data.pcd) {
      await EdDSAPCDPackage.init?.({});
      await EdDSATicketPCDPackage.init?.({});
      const pcd = await EdDSATicketPCDPackage.deserialize(
        JSON.parse(result.data.pcd).pcd
      );

      const url = constructZupassPcdAddRequestUrl(
        process.env.NEXT_PUBLIC_ZUPASS_URL as string,
        window.location.origin,
        await EdDSATicketPCDPackage.serialize(pcd)
      );

      const popupUrl = `/popup?proofUrl=${encodeURIComponent(url)}`;
      setLoading(false);
      window.open(popupUrl, "_blank", "width=450,height=600,top=100,popup");
    }
  }, []);
  return (
    <>
      <p className="my-8">
        To add the badge to Zupass, click the &quot;Add to Zupass&quot; button
        below.
      </p>
      <div className="flex justify-center">
        <div className="border-[#fcb270] border w-[372px] rounded-[12px] overflow-hidden">
          <div className="bg-[#35655f] uppercase text-center p-[10px] tracking-[1px] text-[20px] leading-[1.5] font-[400]">
            Vitalia (Attendee)
          </div>
          <div>
            <Image
              width="370"
              height="370"
              alt="Vitalia Badge"
              src="/badges/vitalia.jpg"
            />
          </div>
          <div className="bg-white p-[12px] flex flex-col text-[#19473f] text-center text-blue">
            <div>{attendeeName}</div>
            <div>{attendeeEmail}</div>
          </div>
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <AddToZupass onClick={addPCD} loading={loading} />
      </div>
    </>
  );
}
