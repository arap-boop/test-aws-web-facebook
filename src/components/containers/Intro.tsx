import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { intro, intro2 } from "@/data/intro";
import Image from "next/image";
import { photos } from "@/data/photo";
import Contents from "./Contents";
import { useRouter } from "next/router";

const Intro = () => {
  const router = useRouter();
  const { id } = router.query;

  const selectedIntro = id === "2" ? intro2 : intro;

  return (
    <div className="bg-gray-300 mt-48 w-full ">
      <div className="ml-[30.5rem] flex flex-row gap-4 justify-center">
        <div className="flex flex-col">
          <div className="mt-10 sticky top-0 left-0 right-0 z-10">
            <Card className="bg-white w-[26rem] ">
              <CardHeader>
                <CardTitle>Intro</CardTitle>
                {selectedIntro.map((item, idx) => (
                  <CardDescription key={idx} className="text-center">
                    {item.description}
                  </CardDescription>
                ))}
                <div className="w-full bg-gray-400 h-0.5"></div>
              </CardHeader>
              {selectedIntro.map((item, idx) => (
                <CardContent key={idx}>
                  <div className="flex flex-row gap-2 text-center items-center">
                    <p className="text-gray-400">{item.icons}</p>
                    <p className="font-semibold text-sm text-black">
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <>
                        <div className="w-0.5 h-0.5 rounded-full bg-gray-400"></div>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                      </>
                    )}
                  </div>
                </CardContent>
              ))}
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
            <Card className="bg-white w-[26rem] mt-4">
              <CardHeader>
                <CardTitle>
                  <div className="flex text-base justify-between items-center">
                    <p>Foto</p>
                    <p className="text-blue-400 font-normal cursor-pointer hover:underline">
                      Lihat Semua Foto
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {photos.map((photo, index) => (
                    <div key={index} className="w-full h-24 relative">
                      <Image
                        src={photo?.photo}
                        alt={`Photo ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="w-full mt-10">
          <Contents introData={selectedIntro} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
