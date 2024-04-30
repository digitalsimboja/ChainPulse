import Link from "next/link";

const LogoLink: React.FC = () => {
  return (
    <Link href="/" className="font-bold text-md text-purple-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(3, 3)">
          <circle cx="8" cy="8" r="8" />
          <path d="M14 14l-2.83-2.83" />
        </g>
      </svg>
    </Link>
  );
};

export default LogoLink;
