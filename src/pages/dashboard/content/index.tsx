import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { avatars } from "@/data/avatar";
import { content } from "@/data/content";
import { Ellipsis, MessageSquare, ThumbsUp, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiShareFatLight } from "react-icons/pi";

const Dashboards = () => {
  const [isFollow, setIsFollow] = React.useState(content.map(() => false));
  const [isLiked, setIsLiked] = React.useState(content.map(() => false));
  const router = useRouter();

  const handleLikeClick = (index: any) => {
    setIsLiked((prev) =>
      prev.map((liked, idx) => (idx === index ? !liked : liked))
    );
  };

  const handleFollowClick = (index: any) => {
    setIsFollow((prev) =>
      prev.map((followed, idx) => (idx === index ? !followed : followed))
    );
  };

  return (
    <div className="ml-10">
      {content.map((item, idx) => (
        <Card key={idx} className="bg-white mt-10">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                <Image
                  onClick={() => {
                    router.push(`/dashboard/content/${item.id}`);
                  }}
                  src={item?.icons}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => {
                  router.push(`/dashboard/content/${item.id}`);
                }}
                className="font-medium ml-4"
                key={idx}
              >
                <div className="">
                  {item.title}
                  
                </div>
              </button>

              <div className="w-1 h-1 bg-gray-400 rounded-full ml-2"></div>
              <div className="ml-2">
                <button
                  onClick={() => handleFollowClick(idx)}
                  className={`font-bold text-base ${
                    isFollow[idx] ? "text-gray-400" : "text-blue-400"
                  }`}
                >
                  {isFollow[idx] ? "Mengikuti" : "Ikuti"}
                </button>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Ellipsis color="gray" />
              <X color="gray" />
            </div>
          </CardHeader>
          <CardTitle className="ml-6 mb-5 font-normal text-base">
           {item.subtitle}
          </CardTitle>
          <CardContent>
            <div className="flex flex-col">
              <Image
                className="w-full"
                src={item?.gambar}
                width={100}
                height={100}
                alt="Candy"
              />
              <div className="w-full mt-3 flex flex-row justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <ThumbsUp />
                  <p className="flex items-center text-gray-400 mt-0.5">379</p>
                </div>
                <div className="flex flex-row gap-3 items-center ml-auto">
                  <div className="flex flex-row gap-3 text-gray-400">
                    <p className="flex items-center">518</p>
                    <p className="flex items-center">Komentar</p>
                  </div>
                  <div className="flex flex-row gap-3 text-gray-400">
                    <p className="flex items-center">518</p>
                    <p className="flex items-center">Dibagikan</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-evenly w-full">
              <button
                onClick={() => handleLikeClick(idx)}
                className={`flex  gap-2 justify-center ${
                  isLiked[idx] ? "text-blue-400" : ""
                }`}
              >
                <ThumbsUp />
                <p className=" text-center flex">Suka</p>
              </button>
              <button className="flex gap-2 justify-center">
                <MessageSquare />
                <p className="flex text-center ">Komentari</p>
              </button>
              <button className="flex gap-2 justify-center">
                <FaWhatsapp size={24} />
                <p className="flex text-center ">Kirim</p>
              </button>
              <button className="flex gap-2 justify-center">
                <PiShareFatLight size={24} />
                <p className="flex text-center ">Bagikan</p>
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
      <div className="h-10"></div>
    </div>
  );
};

export default Dashboards;
