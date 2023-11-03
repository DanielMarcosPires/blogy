/* eslint-disable no-unused-vars */
import { ComponentProps, ReactNode, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { Button } from "../Button/Button";

type Dropdown = ComponentProps<"div">;
interface DropdownProps extends Dropdown {
  dropdownList: ReactNode;
}

export default function Dropdown({
  children,
  className,
  dropdownList,
}: DropdownProps) {
  const [flipflop, setFlip] = useState<boolean>(true);

  return (
    <div className="relative">
      <Button
        onClick={() => {
          setFlip(!flipflop);
        }}
        className={`flex items-center gap-2 ${className}`}
      >
        {children} {flipflop ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </Button>
      <div
        className={`${flipflop ? "hidden" : "flex"
          } absolute flex-col gap-1 rounded bg-white p-4 shadow-xl`}
      >
        {dropdownList}
      </div>
    </div>
  );
}
