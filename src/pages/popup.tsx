"use client";
import { useZupassPopupSetup } from "@pcd/passport-interface";

/**
 * This popup sends requests and receives PCDs from the passport.
 */
export default function Popup() {
  const error = useZupassPopupSetup();

  return <div>{error}</div>;
}
