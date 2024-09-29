interface RekazLogoProps extends React.SVGProps<SVGSVGElement> {}

const RekazLogo: React.FC<RekazLogoProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="29 25.7 350 350"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="975.36"
          y1="-6.5"
          x2="759.35"
          y2="250.01"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1, 0, 0, 1, -626.643806, 35.449992)"
        >
          <stop offset="0" stopColor="#f3d39f" />
          <stop offset="1" stopColor="#f05252" />
        </linearGradient>
      </defs>
      <path
        style={{
          fill: 'url("#linear-gradient")',
        }}
        d="M 204.065 57.317 C 185.485 57.317 166.925 58.017 148.355 59.427 C 98.215 63.097 58.225 102.747 54.125 152.857 C 52.205 175.647 51.675 198.527 52.515 221.387 C 52.555 222.607 52.705 223.817 52.965 225.007 C 53.825 229.587 56.085 233.777 59.435 237.017 C 65.685 242.637 74.035 242.817 81.935 243.627 C 91.935 244.617 101.935 245.107 111.895 245.547 C 143.945 246.707 183.055 247.017 218.085 245.627 C 264.015 243.447 303.835 238.397 317.045 229.827 C 306.095 209.537 278.665 210.177 252.705 210.817 C 247.545 210.947 242.445 211.067 237.545 211.027 C 217.865 211.657 198.165 212.087 178.445 212.327 C 159.865 212.547 140.775 213.757 122.195 212.147 C 98.045 210.047 81.355 189.867 83.715 165.457 C 83.875 163.907 84.105 162.377 84.425 160.857 C 93.445 117.337 174.855 120.107 229.045 97.067 L 205.475 144.697 C 134.135 152.687 105.525 157.067 90.435 174.827 C 97.135 181.567 109.585 181.967 118.425 182.327 C 131.235 182.947 144.185 182.197 156.995 181.657 L 268.105 177.507 C 268.105 177.507 296.405 176.117 310.735 192.907 C 318.015 202.287 322.475 213.547 323.595 225.367 C 324.925 248.037 308.235 267.677 288.055 275.897 C 268.915 283.707 247.165 287.817 227.615 290.097 C 207.365 292.437 186.965 293.207 166.585 292.417 C 141.545 291.567 114.495 290.627 90.115 284.337 C 87.405 283.647 84.745 282.807 82.125 281.837 C 80.785 281.297 79.445 280.817 78.155 280.227 C 76.505 279.517 74.895 278.707 73.285 277.857 C 63.085 272.397 56.065 262.427 54.365 250.987 C 54.835 256.037 55.715 261.047 57.005 265.947 C 68.075 308.197 104.775 338.747 148.335 341.967 C 185.425 344.787 222.675 344.787 259.755 341.967 C 309.915 338.317 349.925 298.657 354.025 248.537 C 356.485 216.697 356.485 184.717 354.025 152.877 C 349.925 102.757 309.915 63.097 259.755 59.447 C 241.175 58.037 222.605 57.337 204.045 57.337 L 204.065 57.317 Z"
      />
      <path
        style={{
          fill: "rgb(255, 255, 255)",
        }}
        d="M 288.095 275.877 C 268.925 283.697 247.195 287.787 227.655 290.097 C 207.395 292.417 186.985 293.187 166.605 292.417 C 141.585 291.557 114.515 290.607 90.165 284.307 C 87.445 283.597 84.775 282.787 82.155 281.827 C 80.825 281.297 79.485 280.777 78.195 280.207 C 76.535 279.477 74.925 278.687 73.345 277.847 C 62.415 272.007 55.185 261.037 54.135 248.687 L 54.135 248.507 C 53.505 240.257 53.025 232.007 52.695 223.767 C 53.435 228.807 55.815 233.467 59.465 237.017 C 65.715 242.637 74.055 242.787 81.965 243.597 C 91.925 244.597 101.945 245.077 111.905 245.557 C 143.945 246.697 183.035 246.987 218.075 245.597 C 264.035 243.457 303.845 238.397 317.045 229.817 C 303.935 205.497 267.075 211.227 237.565 211.037 C 217.875 211.657 198.165 212.087 178.445 212.327 C 159.855 212.567 140.785 213.757 122.185 212.137 C 98.075 210.037 81.345 189.877 83.725 165.457 C 83.875 163.907 84.105 162.357 84.435 160.837 C 93.445 117.317 174.875 120.077 229.085 97.057 L 205.485 144.687 C 134.165 152.697 105.555 157.087 90.445 174.817 C 97.165 181.587 109.605 181.957 118.425 182.347 C 131.245 182.967 144.215 182.207 156.995 181.677 L 268.125 177.527 C 268.125 177.527 296.445 176.147 310.745 192.927 C 318.035 202.287 322.505 213.537 323.615 225.347 C 324.955 248.037 308.265 267.677 288.105 275.887"
      />
    </svg>
  );
};

export default RekazLogo;
