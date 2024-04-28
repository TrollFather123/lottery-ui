import { CustomIconProps } from "@/interface/icons.interface";

const UpArrowIcon = ({ ...props }: CustomIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={props?.IconWidth || "512"}
      height={props?.IconHeight || "512"}
      x="0"
      y="0"
      viewBox="0 0 240.835 240.835"
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M129.007 57.819c-4.68-4.68-12.499-4.68-17.191 0L3.555 165.803c-4.74 4.74-4.74 12.427 0 17.155 4.74 4.74 12.439 4.74 17.179 0l99.683-99.406 99.671 99.418c4.752 4.74 12.439 4.74 17.191 0 4.74-4.74 4.74-12.427 0-17.155L129.007 57.819z"
          fill={props?.IconColor || "#000000"}
          opacity="1"
          data-original={props?.IconColor || "#000000"}
          className=""
        />
      </g>
    </svg>
  );
};

export default UpArrowIcon;
