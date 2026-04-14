import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis, Search } from "lucide-react";
import { avatars } from "@/data/avatar";
import { FiPlus } from "react-icons/fi";

export default function SidebarNews() {
  return (
    <div className=" mb-10 h-screen w-1/4 sticky top-0 left-0 right-0 z-10 ">
      <div className="flex flex-row justify-between">
        <h1 className="text-gray-400 font-bold ml-16">Kontak</h1>
        <div className="flex flex-row gap-4 ">
          <Search color="gray" size={18} />
          <Ellipsis color="gray" size={18} />
        </div>
      </div>
      <div className="mt-5 ml-16">
        {avatars.map((item, idx) => (
          <div className="flex text-center flex-row gap-4 mt-3" key={idx}>
            <Avatar className="bg-gray-200 items-center gap-4 ">
              <AvatarImage src={item.icons} alt="avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="flex items-center font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="bg-gray-400 h-0.5 w-3/4 mt-4 ml-16">
        <div className="">
          <h1 className="font-bold text-gray-500">Percakapan Grup</h1>
          <div className="mt-3 flex flex-row gap-3">
            <div className="w-8 flex items-center justify-center h-8 bg-gray-400 rounded-full">
              <FiPlus size={25} />
             
            </div>
            <p className="flex items-center font-bold">Buat Grup Baru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
