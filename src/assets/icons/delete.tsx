import { SVGProps } from "react";
const BinSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    stroke="#1E1E1E"
    {...props}
  >
    <path
      d="M19.825 9.968s-.543 6.735-.858 9.572c-.15 1.355-.987 2.15-2.358 2.174-2.61.047-5.221.05-7.83-.005-1.318-.027-2.141-.83-2.288-2.162-.317-2.862-.857-9.579-.857-9.579M21.208 6.74H4.25M17.94 6.74a1.648 1.648 0 0 1-1.614-1.324L16.083 4.2a1.28 1.28 0 0 0-1.237-.95h-4.233a1.28 1.28 0 0 0-1.237.95l-.243 1.216A1.648 1.648 0 0 1 7.518 6.74"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BinSVG;
