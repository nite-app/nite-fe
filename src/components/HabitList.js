import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "../styles/HabitList.scss";
import "../styles/Main.scss";
import choiceMenuIcon from "../img/choiceMenuHabit.png";
function HabitList(props) {
  const [srcIcon, setSrcIcon] = useState(props.icon);
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className="container">
      <Checkbox
        {...props.key}
        className="checkboxHabit"
        sx={{
          color: "#000",
          "&.Mui-checked": {
            color: "#000",
          },
          "& .MuiSvgIcon-root": {
            borderRadius: 30,
          },
        }}
        size="medium"
        onChange={() => {
          setIsChecked(!isChecked);
          if (isChecked) {
            document.querySelector(
              "#habitLabel" + props.ID
            ).style.textDecoration = "line-through";
          } else {
            document.querySelector(
              "#habitLabel" + props.ID
            ).style.textDecoration = "none";
          }
        }}
      />
      <span class="nameLabel" id={"habitLabel" + props.ID}>
        {props.habitName}
      </span>
      <span id="iconContainer">
        <img
          src={srcIcon}
          width={(750 * 100) / window.innerWidth}
          alt=""
          id="iconHabit"
          onMouseOver={() => setSrcIcon(choiceMenuIcon)}
          onMouseOut={() => setSrcIcon(props.icon)}
        />
      </span>
    </div>
  );
}
export default HabitList;
