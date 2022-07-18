import React, { useState } from "react";
import Picker from "emoji-picker-react";

function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    event.preventDefault();
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="flex flex-col rounded-3xl bg-white w-full p-5">
      {chosenEmoji ? (
        <p>You chose: {chosenEmoji.unified}</p>
      ) : (
        <p>No emoji selected</p>
      )}
      <Picker onEmojiClick={onEmojiClick} native={true} />
    </div>
  );
}

export default EmojiPicker;
