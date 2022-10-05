import { SVGProps } from "react";

const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={27}
    fill="none"
    {...props}
  >
    <path
      d="M11.457 25.917v-25M21.498 15.834l-10.04 10.083L1.416 15.834"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowSVG;
