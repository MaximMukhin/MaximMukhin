import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Page } from '../components/Page';


const Test = () => {
  const [articles, setArticles] = useState([]);
  //   const [content, setContent] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1')
      .then(res => setArticles(res.data))
  }, [setArticles])

  const button = () => {
    console.log('button', 'articles', articles)
  }

  const inputText = (text) => {
    console.log('inputText', text);
  }
  const inputTextArea = (text) => {
    console.log('inputTextArea', text);
  }

  return (
    <Page>
      <div>
      <div>Test</div>
        <input
          type='text'
          placeholder='Title'
          size={40}
          onInput={inputText}
        />
        <br />
        <textarea
          placeholder='Content'
          cols={40}
          rows={6}
          onInput={inputTextArea}
        />
        <br />
        <button onClick={button}>Редактировать!</button>
        <br />
        <br />
        <hr />
        {articles.map(article => (
          <div key={article.id}>{article.id}: {article.title}</div>
        ))}
        <hr />
    </div>
    </Page>

  )
}

export default Test