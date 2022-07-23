import React, { useState } from "react";
import styles from "./Articles.module.css";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("error");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {loading && "Загрузка....."}
      <div className={styles.wrapper}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <h4>{post.title}</h4>
            <p>{post.body} </p>
            <a href="https://yandex.ru/">Read now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
