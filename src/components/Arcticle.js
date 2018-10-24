import React from "react";

function Arcticle(props) {
  console.log(props);
  const { article } = props;
  return (
    <div>
      <p>
        <b>{article.title}</b>
      </p>
      <div>{article.text}</div>
    </div>
  );
}
export default Arcticle;
