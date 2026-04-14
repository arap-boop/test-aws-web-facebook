import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaFilter } from "react-icons/fa";
import { content } from "@/data/content";
import { Ellipsis, MessageSquare, ThumbsUp, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { FaEarthAmericas, FaPaperPlane } from "react-icons/fa6";
import { useRouter } from "next/router";

const Contents = ({introData}:any) => {
  const [isLiked, setIsLiked] = React.useState(content.map(() => false));
  const router = useRouter();
  const { id } = router.query;

  const handleLikeClick = (index:any) => {
    setIsLiked((prev) =>
      prev.map((liked, idx) => (idx === index ? !liked : liked))
    );
  };

  const selectedItem = content.find(item => item.id === id);

  if (id && !selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <Card className="bg-white w-[31.5rem]">
        <CardHeader>
          <div className="flex flex-row ">
            <p className="font-bold text-xl">Postingan</p>
            <div className="ml-auto bg-gray-400 w-fit h-8 rounded-lg flex gap-2 items-center justify-center">
              <FaFilter className="ml-2" /> <p className="mr-2">Filter</p>
            </div>
          </div>
        </CardHeader>
      </Card>
      {selectedItem ? (
        <Card className="bg-white mt-10 h-fit w-[31.5rem]">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                <Image
                  src={selectedItem.icons}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <button className="font-medium mr-2">
                  {selectedItem.title}
                </button>
                <div className="ml-4 text-xs flex flex-row items-center">
                  14 Juli
                  <div className="w-1 h-1 bg-gray-400 rounded-full ml-2"></div>
                  <div className="ml-2">
                    <FaEarthAmericas />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Ellipsis color="gray" />
              <X color="gray" />
            </div>
          </CardHeader>
          <CardTitle className="ml-6 mb-5 font-normal text-base">
            {selectedItem.subtitle}
          </CardTitle>
          <CardContent>
            <div className="flex flex-col">
              <Image
                className="w-full"
                src={selectedItem.gambar}
                width={100}
                height={100}
                alt="Candy"
              />
              <div className="w-full mt-3 flex flex-row justify-between">
                <div className="flex flex-row gap-3 items-center">
                  <ThumbsUp />
                  <p className="flex items-center text-gray-400 mt-0.5">
                    {selectedItem.like}
                  </p>
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
            <div className="w-full">
              <div className="flex justify-evenly w-full mb-4">
                <button
                  onClick={() => handleLikeClick(content.indexOf(selectedItem))}
                  className={`flex gap-2 justify-center ${
                    isLiked[content.indexOf(selectedItem)] ? "text-blue-400" : ""
                  }`}
                >
                  <ThumbsUp />
                  <p className="text-center flex">Suka</p>
                </button>
                <button className="flex gap-2 justify-center">
                  <MessageSquare />
                  <p className="flex text-center">Komentari</p>
                </button>
                <button className="flex gap-2 justify-center">
                  <FaWhatsapp size={24} />
                  <p className="flex text-center">Kirim</p>
                </button>
                <button className="flex gap-2 justify-center">
                  <PiShareFatLight size={24} />
                  <p className="flex text-center">Bagikan</p>
                </button>
              </div>
              <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
            </div>
          </CardFooter>
          <div className="px-4">
            <div className="w-full ">
              <div className="relative flex items-center">
                <textarea
                  id="comment"
                  name="comment"
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 bg-gray-300 mb-3 rounded-md pr-10"
                  placeholder="Tulis komentar..."
                ></textarea>
                <button className="absolute right-2 top-2 text-blue-500">
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        content.map((item, idx) => (
          <Card key={idx} className="bg-white mt-10 h-fit w-[31.5rem]">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="w-10 h-10 bg-gray-400 rounded-full overflow-hidden">
                  <Image
                    src={item.icons}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <button
                    className="font-medium mr-2"
                    onClick={() => router.push(`/path-to-page?id=${item.id}`)}
                  >
                    {item.title}
                  </button>
                  <div className="ml-4 text-xs flex flex-row items-center">
                    14 Juli
                    <div className="w-1 h-1 bg-gray-400 rounded-full ml-2"></div>
                    <div className="ml-2">
                      <FaEarthAmericas />
                    </div>
                  </div>
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
                  src={item.gambar}
                  width={100}
                  height={100}
                  alt="Candy"
                />
                <div className="w-full mt-3 flex flex-row justify-between">
                  <div className="flex flex-row gap-3 items-center">
                    <ThumbsUp />
                    <p className="flex items-center text-gray-400 mt-0.5">
                      {item.like}
                    </p>
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
              <div className="w-full">
                <div className="flex justify-evenly w-full mb-4">
                  <button
                    onClick={() => handleLikeClick(idx)}
                    className={`flex gap-2 justify-center ${
                      isLiked[idx] ? "text-blue-400" : ""
                    }`}
                  >
                    <ThumbsUp />
                    <p className="text-center flex">Suka</p>
                  </button>
                  <button className="flex gap-2 justify-center">
                    <MessageSquare />
                    <p className="flex text-center">Komentari</p>
                  </button>
                  <button className="flex gap-2 justify-center">
                    <FaWhatsapp size={24} />
                    <p className="flex text-center">Kirim</p>
                  </button>
                  <button className="flex gap-2 justify-center">
                    <PiShareFatLight size={24} />
                    <p className="flex text-center">Bagikan</p>
                  </button>
                </div>
                <div className="w-full h-0.5 bg-gray-300 mt-2"></div>
              </div>
            </CardFooter>
            <div className="px-4">
              <div className="w-full ">
                <div className="relative flex items-center">
                  <textarea
                    id="comment"
                    name="comment"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 bg-gray-300 mb-3 rounded-md pr-10"
                    placeholder="Tulis komentar..."
                  ></textarea>
                  <button className="absolute right-2 top-2 text-blue-500">
                    <FaPaperPlane size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
      <div className="text-gray-300"></div>
    </div>
  );
};

export default Contents;
