import React, { useState, useEffect } from "react";
import axios from "axios";
import { Page } from "../components/Page";

const Test = () => {
  const [article, setArticle] = useState([]);
  const [editArticle, setEditArticle] = useState({});

  let title = article[0]?.title;
  let body = article[0]?.body;

  console.log("article:", article);
  console.log("editArticle:", editArticle);

  console.log("title:", title);
  console.log("content:", body);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=1&_page=1")
      .then((res) => setArticle(res.data))
      .catch((error) => console.error(error));
  }, [setArticle]);

  const button = () => {
    console.log("button", "article:", article);
    const editArticle = {
      title: title,
      body: body,
    };
    setEditArticle(editArticle);
    console.log("editArticle:", editArticle);
  };

  const inputText = (event) => {
    console.log("inputText", event.target.value);
    title = event.target.value;
    console.log("title:", title);
  };
  const inputTextArea = (event) => {
    console.log("inputTextArea", event.target.value);
    body = event.target.value;
    console.log("content:", body);
  };

  return (
    <Page>
      <div>
        <div>Test</div>
        <input
          defaultValue={article[0]?.title}
          type="text"
          placeholder="Title"
          size={40}
          onInput={inputText}
        />
        <br />
        <textarea
          placeholder="Content"
          defaultValue={article[0]?.body}
          cols={40}
          rows={6}
          onInput={inputTextArea}
        />
        <br />
        <button onClick={button}>Редактировать!</button>
        <br />
        <br />

        <section>
          <h3>Загруженная статья</h3>
          <hr />
          <div>
            <p>
              <span style={{ fontWeight: "900" }}>title:</span>
              {article[0]?.title}
            </p>
            <br />
            <p>
              <span style={{ fontWeight: "900" }}>content:</span>
              {article[0]?.body}
            </p>
          </div>
        </section>

        <br />

        <section>
          <h3>Отредактированая статья</h3>
          <hr />
          <div>
            <p>
              <span style={{ fontWeight: "900" }}>title:</span>
              {editArticle?.title}
            </p>
            <br />
            <p>
              <span style={{ fontWeight: "900" }}>content:</span>
              {editArticle?.body}
            </p>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Test;
