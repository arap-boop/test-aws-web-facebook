import * as React from "react";

interface Props extends React.PropsWithChildren {}

export default function HeaderTitle({ children }: Props) {
  return <h1 className="text-xl font-bold">{children}</h1>;
}
