import { Bell, BookImage, Bookmark, Calendar, CircleUserRound, Clock8, CreditCard, Earth, Flag, Gamepad, Gift, Mails, MessageCircle, MessageCircleHeart, SquareMenu, Store, TvMinimalPlay, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiMessengerLine } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";

export const sidebars = [
  {
    title: "otoy karbu",
    icons: (
      <Avatar className="">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Teman",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><CircleUserRound size={34}  /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Kenangan",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Clock8 size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Tersimpan",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Bookmark size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Grup",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Users size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Video",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><TvMinimalPlay size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Marketplace",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Store size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Kabar",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Mails size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Acara",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Calendar size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Aktivitas",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><BookImage size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Facebook pay",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><CreditCard size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Halaman",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Flag size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Main game",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Gamepad size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Messenger",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><RiMessengerLine size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Messenger Anak",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><RiMessengerLine size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Pengelola Iklan",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><IoStatsChart size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Penggalangan Dana",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><MessageCircleHeart size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Pusat Info Perubahan Iklim",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Earth size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Ulang Tahun",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><Gift size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
  {
    title: "Video Game",
    icons: (
      <Avatar className="">
        <AvatarImage src="" alt="@shadcn" />
        <AvatarFallback><MdSpaceDashboard size={34} /></AvatarFallback>
      </Avatar>
    ),
  },
];
