import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebars } from "@/data/sidebar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const itemsToShow = isOpen ? sidebars : sidebars.slice(0, 11);

  return (
    <div className="flex flex-col sticky top-0 left-0 right-0 z-10">
      {itemsToShow.map((item, idx) => (
        <div key={idx} className="h-14">
          <button>
            <div className="flex flex-row gap-4 items-center ">
              <div>{item.icons}</div>
              <p>{item.title}</p>
            </div>
          </button>
        </div>
      ))}
      <div>
        <button
          className="flex flex-row gap-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Avatar className="bg-gray-200 flex items-center">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </AvatarFallback>
          </Avatar>
          <p className=" flex text-center mt-2">
            {isOpen ? "Lihat lebih sedikit" : "Lihat selengkapnya"}
          </p>
        </button>
      </div>
      <div className="h-5"></div>
    </div>
  );
}
