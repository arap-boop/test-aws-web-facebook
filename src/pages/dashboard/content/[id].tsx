import { content } from "@/data/content";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFolderPlus } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import Intro from "@/components/containers/Intro";

const DashboardsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const contents = content.find((item) => item.id === String(id));

  return (
    <div className="bg-white flex flex-col w-full">
      <div className="relative w-full flex justify-center ">
        <div className="absolute inset-0 "></div>
        {contents?.photo && (
          <div className="relative w-1/2 h-fit items-center justify-center flex">
            <div className="relative w-full">
              <Image
                className="w-full"
                src={contents?.photo}
                alt="avatar"
                width={500}
                height={500}
              />
              {contents?.icons && (
                <div className="absolute bottom-0 left-0 transform translate-y-24 ml-6 flex flex-row">
                  <Image
                    src={contents.icons}
                    alt="bottom image"
                    width={100}
                    height={100}
                    className="w-48 h-w-48 object-cover rounded-full"
                  />
                  <div className="flex flex-col ml-8">
                    <p className="mt-32 text-2xl font-bold ">
                      {contents.title}
                    </p>
                    <div className="flex items-center w-full">
                      <p className="font-medium text-sm">{contents.followers}</p>
                      <div className="w-1 h-1 rounded-full bg-black mx-2"></div>
                      <p className="font-medium text-sm">{contents.following}</p>
                      <div className="ml-32 flex flex-row gap-3">
                        <div className="bg-blue-600 flex flex-row items-center gap-2 text-white w-32 justify-center rounded-lg h-8">
                          <TfiEmail /> Kirim Emails
                        </div>
                        <div className="bg-white flex flex-row items-center gap-2 text-white w-32 justify-center rounded-lg h-8">
                          <p className="text-black">
                            <FaFacebookMessenger />
                          </p>
                          Kirim Pesan
                        </div>
                        <div className="bg-white flex flex-row items-center gap-2 text-white w-24 justify-center rounded-lg h-8">
                          <p className="text-black justify-start flex">
                            <FaFolderPlus />
                          </p>
                          Ikuti
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute w-full mt-28">
              <div className="w-full bg-gray-400 h-0.5 mt-2"></div> 
                <div className="flex flex-row gap-4 w-full mt-4 px-2">
                  <div>
                    <button>Postingan</button>
                  </div>
                  <div>Tentang</div>
                  <div>Penyebutan</div>
                  <div>Reels</div>
                  <div>Foto</div>
                  <div>Video</div>
                  <div>Lainnya</div>
                  <div className="ml-auto bg-gray-400 w-10 h-8 rounded-lg flex items-center justify-center">
                    <HiDotsHorizontal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div >
        <Intro />
      </div>
    </div>
  );
};

export default DashboardsDetail;
