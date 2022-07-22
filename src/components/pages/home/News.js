import React, { useState } from "react";

function News() {
  //get from db api next
  const [img, setImg] = useState("/img/demonw.png");
  const [title, setTitle] = useState("Sleeping tips with Diego");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(
    "For today, we reserved you some practical tips to help you fall asleep faster, and wake up more energic than ever before! "
  );

  return (
    <div className="p-5 rounded-3xl bg-white">
      <div
        className="box-border rounded-2xl mb-8 bg-cover bg-no-repeat relative aspect-[21/9]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <img
          src={require("../../../img/logo.png")}
          alt="logo"
          className="absolute bottom-2 right-2 h-10 aspect-square sm:bottom-5 sm:right-5 sm:h-12"
        />
      </div>
      <p className="font-semibold text-xl mb-3">{title}</p>
      <p className="">{preview}</p>
    </div>
  );
}

export default News;
