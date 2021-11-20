import React, { useEffect, useState } from "react";

const inputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  const random_boolean = Math.random() >= 0.5
  const [ isLoading, setIsLoading ] = useState(random_boolean === true);


  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 2000)
  })

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter some Text"
      ></input>
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>;
        })}
      </ul>
    </div>
  );
};

export default inputElement;
