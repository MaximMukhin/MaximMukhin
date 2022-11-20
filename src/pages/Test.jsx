import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Navigation from '../components/Navigation';


const Test = () => {
  //   const [articles, setArticles] = useState([]);
  //   const [content, setContent] = useState("");

  //   axios.get()

  //   useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1').then(res => console.log(res);)
  // }, [setArticles])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1')
  //     .then((res) => {
  //       res.json().then((data) => {
  //         //console.log(data);
  //         setPostItems(data)
  //       })
  //     })
  // }, [setPostItems])

  return (
    <div>
      <Navigation />
      <div>Test</div>
    </div>

  )
}

export default Test