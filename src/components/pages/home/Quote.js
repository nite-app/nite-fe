import React, { useState, useEffect } from "react";
import axios from "axios";
import { quotesEmojis } from "../../../data/QuotesEmojis";

function Quote() {
  const [currentQuote, setCurrentQuote] = useState({});

  const getQuote = () => {
    axios.get("https://api.quotable.io/random").then((response) => {
      setCurrentQuote({
        content: response.data.content,
        author: response.data.author,
        icon: quotesEmojis[Math.floor(Math.random() * quotesEmojis.length)],
      });
    });
  };

  // provvisorio vi prego
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="flex flex-col rounded-3xl bg-white w-full p-5 dark:bg-neutral-700">
      <p className="font-medium dark:text-white">{currentQuote.content}</p>
      <p className="text-gray-500 text-sm mt-3 dark:text-gray-300">
        {currentQuote.icon} - {currentQuote.author}
      </p>
    </div>
  );
}

export default Quote;
