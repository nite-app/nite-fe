import React, { useState } from "react";

function Cycles() {
  const [selectedTime, setSelectedTime] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();

  return (
    <div className="flex flex-col p-10 rounded-3xl bg-white">
      <div>
        <p className="font-semibold text-xl mb-5">
          At what time do you have to wake up?
        </p>
        <div className="flex flex-col md:flex-row">
          <input
            type="number"
            name="hours"
            id=""
            placeholder="Hours"
            step={5}
            className="p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-semibold w-full h-14 focus:outline-none placeholder:text-lg placeholder:text-gray-500 md:w-32"
          />
          <input
            type="number"
            name="minutes"
            id=""
            placeholder="Minutes"
            step={5}
            className="mt-2 p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-semibold w-full h-14 focus:outline-none placeholder:text-lg placeholder:text-gray-500 md:mt-0 md:w-32"
          />
          <select
            name="ampm"
            id=""
            className="mt-2 p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-semibold w-full h-14 focus:outline-none md:mt-0 md:w-28"
          >
            <option value="am">am</option>
            <option value="pm">pm</option>
          </select>
        </div>
        <button className="p-3 px-5 bg-gray-800 text-white font-semibold mt-2 rounded-2xl">
          Calculate
        </button>
      </div>
      {selectedTime ? (
        <>
          <div>
            <p className="font-semibold text-xl mb-5 mt-10">
              Then, try to fall asleep at one of the following times:
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time1}
              </div>
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time2}
              </div>
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time3}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="font-semibold text-xl mb-5 mt-10">
              If you went to bed now,
              <br />
              try to wake up at one of the following times:
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time1}
              </div>
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time2}
              </div>
              <div className="mt-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 mr-2 md:w-36">
                {time3}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cycles;
