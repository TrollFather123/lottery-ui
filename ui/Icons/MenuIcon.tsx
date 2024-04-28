import { CustomIconProps } from "@/interface/icons.interface";

const MenuIcon = ({ ...props }: CustomIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={props?.IconWidth || "512"}
      height={props?.IconHeight || "512"}
      x="0"
      y="0"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M21 6.75H10a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm.75 5.25a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75zm-7 6a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75z"
          fill={props?.IconColor || "#000000"}
          opacity="1"
          data-original={props?.IconColor || "#000000"}
          className=""
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
