import Highlight, { defaultProps } from "prism-react-renderer";
import vsLight from "prism-react-renderer/themes/vsLight";
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-dart");

const CodeBlock = ({ code, language }) => {
  return (
    <>
      <Highlight
        {...defaultProps}
        theme={vsLight}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} font-inconsolata text-lg px-8 pt-8 rounded-md bg-gray-100 overflow-auto my-4 dark:bg-gray-800`}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

export default CodeBlock;
