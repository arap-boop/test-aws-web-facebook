import { IconProps } from "@/components/ui/icons";

export interface Menu {
  id: string;
  label: string;
  path: string;
  Icon: (props: IconProps) => React.ReactElement;
  roles?: string[] | "*";
  subMenus?: Omit<Menu, "Icon">[];
}
export interface EventProps {
  allDay: boolean;
  end: Date;
  start: Date;
  title: string;
  data: {
    color: string;
    textColor: string;
    borderColor: string;
  };
}
