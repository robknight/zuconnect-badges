"use client";
import { useZupass } from "@/utils/zupass";
import { ITicketData } from "@pcd/eddsa-ticket-pcd";
import SignInWithZupass from "./SignInWithZupass";

export default function AuthButton({
  onAuth
}: {
  onAuth: (data: Partial<ITicketData>) => void;
}) {
  const { login } = useZupass({ onAuth });
  return <SignInWithZupass onClick={login}></SignInWithZupass>;
}
