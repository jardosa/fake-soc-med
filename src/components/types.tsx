import { ReactNode } from "react";

export type Profile = {
  name: string;
  profilePicture?: string;
}

export type Action = {
  active?: boolean
  label: string;
  icon: ReactNode;
  onClick: () => void
}