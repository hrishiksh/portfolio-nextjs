import { ReactNode } from "react";
import CodeBlock from "../components/CodeBlock";

export const components = {
  h2: (props) => (
    <h2
      className="font-inter font-bold text-2xl py-6 sm:text-3xl  dark:text-yellow-400"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="font-inter font-bold text-xl sm:text-2xl py-4 dark:text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-inter font-normal leading-loose text-xl  py-4 text-gray-800 dark:text-white"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="font-inter font-normal leading-loose text-xl text-blue-400"
      {...props}
    />
  ),
  em: (props) => (
    <em
      className="font-sriracha not-italic font-normal leading-loose text-xl px-1 text-pink-500"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-200 px-2 py-1 text-lg font-inconsolata rounded dark:bg-gray-600"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="px-4 border-l-4 border-blue-400  bg-gray-100 dark:bg-blue-400 dark:bg-opacity-25"
      {...props}
    />
  ),

  ul: (props) => (
    <ul className="list-disc list-inside py-4 dark:text-white" {...props} />
  ),
  ol: (props) => (
    <ul className="list-decimal list-inside py-4 dark:text-white" {...props} />
  ),
  li: (props) => (
    <li
      className="font-inter font-normal text-xl leading-loose dark:text-white py-4"
      {...props}
    />
  ),

  pre: (props) => {
    return (
      <CodeBlock
        code={props.children[0].props.children[0]}
        language={props.children[0].props.className.split("-")[1]}
      />
    );
  },
};
