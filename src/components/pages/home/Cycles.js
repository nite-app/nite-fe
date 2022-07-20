import React, { useState } from "react";

function Cycles() {
  const [selectedTime, setSelectedTime] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();

  return (
    <div className="flex flex-col p-5 rounded-3xl bg-white">
      <div>
        <p>At what time to you have to wake up?</p>
        <div>
          <input
            type="number"
            name="hours"
            id=""
            placeholder="Hours"
            min="1"
            max="12"
            step={5}
          />
          <input
            type="number"
            name="minutes"
            id=""
            placeholder="Minutes"
            min="1"
            max="59"
            step={5}
          />
          <select name="ampm" id="">
            <option value="am">am</option>
            <option value="pm">pm</option>
          </select>
        </div>
        <button>Calculate</button>
      </div>
      <div>
        <p>Then, try to fall asleep at one of the following times:</p>
        <div>
          <div>{time1}</div>
          <div>{time2}</div>
          <div>{time3}</div>
        </div>
      </div>
    </div>
  );
}

export default Cycles;
