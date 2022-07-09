import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/vsLight";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import Prism from "prism-react-renderer/prism";
import useDarkTheme from "../hooks/usedarkTheme";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-dart");

const CodeBlock = ({ code, language }) => {
  const isDarktheme = useDarkTheme();

  return (
    <>
      <Highlight
        {...defaultProps}
        theme={isDarktheme ? darkTheme : lightTheme}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} font-inconsolata text-base sm:text-lg py-8 rounded-md bg-gray-100 overflow-auto my-4 dark:bg-gray-700/50`}
          >
            {tokens.map(function (line, i) {
              return (
                <div {...getLineProps({ line, key: i })} className="px-4">
                  <span className="pr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </>
  );
};

export default CodeBlock;
