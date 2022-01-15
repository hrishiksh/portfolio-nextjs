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
            className={`${className} font-inconsolata text-base sm:text-lg pt-8 rounded-md bg-gray-100 overflow-auto my-4 dark:bg-gray-700/50`}
          >
            {tokens.map(function (line, i) {
              if (
                line[0]?.content.includes("++") ||
                line[1]?.content.includes("++")
              ) {
                return (
                  <div
                    {...getLineProps({ line, key: i })}
                    className="bg-green-500/20 pl-1 pr-8"
                  >
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              } else if (
                line[0]?.content.includes("--") ||
                line[1]?.content.includes("--")
              ) {
                return (
                  <div
                    {...getLineProps({ line, key: i })}
                    className="bg-red-500/20 pl-1 pr-8"
                  >
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                );
              }
              return (
                <div {...getLineProps({ line, key: i })} className="px-8">
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
