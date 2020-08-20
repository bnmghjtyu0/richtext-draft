import React from "react";

const HANDLE_REGEX = /@[\w]+/g;
const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;
function handleStrategy(contentBlock, callback, contentState) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}
function hashtagStrategy(contentBlock, callback, contentState) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}
function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText();
  let matchArr, start;
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
const HandleSpan = (props) => {
  return (
    <span style={styles.handle} data-offset-key={props.offsetKey}>
      {props.children}
    </span>
  );
};
const HashtagSpan = (props) => {
  return (
    <button
      style={styles.hashtag}
      data-offset-key={props.offsetKey}
      onClick={(e) => {
        window.open("www.google.com.tw", "_blank");
      }}
      // href={props.children}
    >
      {props.children}
    </button>
  );
};

const decorationSignAt = { strategy: handleStrategy, component: HandleSpan };
const decorationHashTag = { strategy: hashtagStrategy, component: HashtagSpan };

export { decorationSignAt, decorationHashTag };

const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    width: 600
  },
  editor: {
    border: "1px solid #ddd",
    cursor: "text",
    fontSize: 16,
    minHeight: 40,
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: "center"
  },
  handle: {
    color: "rgba(98, 177, 254, 1.0)",
    direction: "ltr",
    unicodeBidi: "bidi-override"
  },
  hashtag: {
    color: "rgba(95, 184, 138, 1.0)"
  }
};
