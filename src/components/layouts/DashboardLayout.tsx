import * as React from "react";

import { Menu } from "@/types";

import { IconProps, Icons } from "../ui/icons";
import Sidebar from "./Sidebar";

interface Props extends React.PropsWithChildren {}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen">

      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-hidden">
        {children}
      </div>
    </div>
  );
}
