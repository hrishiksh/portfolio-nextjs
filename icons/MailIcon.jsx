import useDarkTheme from "../hooks/usedarkTheme";

const MailIcon = () => {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
};

export default MailIcon;
