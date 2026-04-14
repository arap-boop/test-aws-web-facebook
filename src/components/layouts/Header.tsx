import * as React from "react";
import Logo from "@/../public/logo/facebook-6338507_1280.webp";
import Image from "next/image";
import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { icon } from "@/data/icon";

interface Props extends React.PropsWithChildren {}

export default function Header({ children }: Props) {
  return (
    <header className="flex items-center border-b border-primary/30 px-6 py-4 shadow-sm">
      {children}
      <div className="flex items-center gap-4 w-full">
        <div className="flex gap-1">
          <Image
            className="bg-[#3B5998]"
            src={Logo}
            alt="Facebook"
            width={40}
            height={40}
          />
        </div>
        <div className="relative">
          <input
            placeholder="Cari di Facebok"
            className="bg-gray-100 rounded-xl pl-10 h-8"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search color="gray" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        {icon.map((item, idx) => (
          <button key={idx}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="bg-gray-200">
                    <AvatarImage src="" alt="@shadcn" />
                    <AvatarFallback>{item.icons}</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </button>
        ))}
        <button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>Akun</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </div>
    </header>
  );
}
