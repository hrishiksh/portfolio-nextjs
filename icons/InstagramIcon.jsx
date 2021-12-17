import useDarkTheme from "../hooks/usedarkTheme";

const InstagramIcon = () => {
  let isItDark = useDarkTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="m-2 dark:text-gray-200"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={isItDark ? "#F5F5F5" : "#2c3e50"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </svg>
  );
};

export default InstagramIcon;
