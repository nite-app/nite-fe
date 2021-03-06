import React, { useState } from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker
        onEmojiClick={onEmojiClick}
        groupVisibility={{
          flags: false,
        }}
        native={true}
        pickerStyle={{ borderRadius: "20px!important" }}
        disableSkinTonePicker={true}
        searchPlaceholder={"Search..."}
      />
    </div>
  );
};

export default EmojiPicker;
