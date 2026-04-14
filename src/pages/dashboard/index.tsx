import React from "react";
import Image from "next/image";
import Link from "next/link";

import SidebarNews from "@/components/containers/SidebarNews";
import Content from "@/components/layouts/Content";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Header from "@/components/layouts/Header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { NextPageWithLayout } from "@/pages/_app";
import Sidebar from "@/components/layouts/Sidebar";
import Dashboards from "./content";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="ml-8 mt-8 flex gap-4">
      <div className="sticky top-0 left-0 right-0 z-10"><Sidebar /></div>
      <div className="flex flex-1 justify-center">
        <div className="w-full ml-10 max-w-3xl">
          <Content>
            <Dashboards />
          </Content>
        </div>
      </div>
 <SidebarNews />
      <div>
        <Separator orientation="vertical" className="" />
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <Header />
      <Content>{page}</Content>
    </DashboardLayout>
  );
};
