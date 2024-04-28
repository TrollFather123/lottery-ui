import { CustomIconProps } from "@/interface/icons.interface";

const DownArrowIcon = ({ ...props }: CustomIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={props?.IconWidth || "512"}
      height={props?.IconHeight || "512"}
      x="0"
      y="0"
      viewBox="0 0 451.847 451.847"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z"
          fill={props?.IconColor || "#000000"}
          opacity="1"
          data-original={props?.IconColor || "#000000"}
        />
      </g>
    </svg>
  );
};

export default DownArrowIcon;
