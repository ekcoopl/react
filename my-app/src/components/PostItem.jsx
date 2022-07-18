import React from "react";

const PostItem = (props) => {
    console.log(props);
  return (
    <div className="post">
      <div className="post_content">
        <strong>1. JavaScript</strong>
        <div>JavaScript - язык программирования</div>
      </div>

      <div className="post_btn">
        <button>Удалить</button>
      </div>
    </div>
  );
};
export default PostItem;
