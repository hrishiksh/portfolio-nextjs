import { useEffect, useState } from "react";

const useDarkTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    //* chechking the user default theme for the browser
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return isDark;
};

export default useDarkTheme;
