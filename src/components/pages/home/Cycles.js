import React, { useEffect, useState } from "react";
import CycleCard from "./CycleCard";

function Cycles() {
  const currentDate = new Date();
  const [selectedTime, setSelectedTime] = useState();
  const [selHours, setSelHours] = useState();
  const [selMins, setSelMins] = useState();
  const [sel1, setSel1] = useState();
  const [sel2, setSel2] = useState();
  const [sel3, setSel3] = useState();
  const [ampm, setAmpm] = useState();
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();
  const [cr1, setCr1] = useState(false);
  const [cr2, setCr2] = useState(false);
  const [cr3, setCr3] = useState(false);

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function handleCustomCalc() {
    if (selHours > 12 || selHours < 0 || selMins > 59 || selMins < 0) {
      alert("Insert a valid time!");
      setSelHours("");
      setSelMins("");
      return;
    }

    const date = new Date();
    date.setHours(selHours);
    date.setMinutes(selMins);
    if (ampm === "pm") date.setHours(date.getHours() + 12); //convert from am to pm
    setSelectedTime(date);

    const date1 = new Date();
    date1.setHours(date.getHours() - 9);
    date1.setMinutes(date.getMinutes());
    setSel1(formatAMPM(date1));

    const date2 = new Date();
    date2.setHours(date.getHours() - 7);
    date2.setMinutes(date.getMinutes() - 30);
    setSel2(formatAMPM(date2));

    const date3 = new Date();
    date3.setHours(date.getHours() - 6);
    date3.setMinutes(date.getMinutes());
    setSel3(formatAMPM(date3));
  }

  useEffect(() => {
    const date1 = new Date();
    date1.setHours(currentDate.getHours() + 6);
    setTime1(formatAMPM(date1));

    const date2 = new Date();
    date2.setHours(currentDate.getHours() + 7);
    date2.setMinutes(currentDate.getMinutes() + 30);
    setTime2(formatAMPM(date2));

    const date3 = new Date();
    date3.setHours(currentDate.getHours() + 9);
    setTime3(formatAMPM(date3));
  }, []);

  return (
    <div className="flex flex-col p-5 rounded-3xl bg-white md:p-10">
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
            className="p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-medium w-full h-14 focus:outline-none placeholder:text-md placeholder:text-gray-500 md:w-32"
            value={selHours}
            onChange={(e) => {
              setSelHours(e.currentTarget.value);
            }}
          />
          <input
            type="number"
            name="minutes"
            id=""
            placeholder="Minutes"
            step={5}
            className="mt-2 p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-medium w-full h-14 focus:outline-none placeholder:text-md placeholder:text-gray-500 md:mt-0 md:w-32"
            value={selMins}
            onChange={(e) => {
              setSelMins(e.currentTarget.value);
            }}
          />
          <select
            name="ampm"
            id=""
            className="mt-2 p-3 pl-5 mr-2 bg-gray-300 rounded-2xl text-xl font-medium w-full h-14 focus:outline-none md:mt-0 md:w-28"
            onChange={(e) => {
              setAmpm(e.target.value);
            }}
          >
            <option value="am">am</option>
            <option value="pm">pm</option>
          </select>
        </div>
        <button
          className="p-3 px-5 bg-gray-800 text-white font-semibold mt-2 rounded-2xl"
          onClick={handleCustomCalc}
        >
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
              <div className="box-border mt-2 mr-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="box-border flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr1(!cr1);
                  }}
                >
                  <p className="font-medium text-xl">{sel1}</p>
                </div>
                {cr1 ? (
                  <>
                    <CycleCard cycles={6} hours={"nine"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="box-border mt-2 mr-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="box-border flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr2(!cr2);
                  }}
                >
                  <p className="font-medium text-xl">{sel2}</p>
                </div>
                {cr2 ? (
                  <>
                    <CycleCard cycles={5} hours={"seven and a half"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="box-border mt-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="box-border flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr3(!cr3);
                  }}
                >
                  <p className="font-medium text-xl">{sel3}</p>
                </div>
                {cr3 ? (
                  <>
                    <CycleCard cycles={4} hours={"six"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="font-semibold text-xl mb-5 mt-10">
              If you go to bed now,
              <br />
              try to wake up at one of the following times:
            </p>
            <div className="flex flex-col md:flex-row">
              <div className="box-border mt-2 mr-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="box-border flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr1(!cr1);
                  }}
                >
                  <p className="font-medium text-xl">{time1}</p>
                </div>
                {cr1 ? (
                  <>
                    <CycleCard cycles={6} hours={"nine"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="box-border mt-2 mr-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="box-border flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr2(!cr2);
                  }}
                >
                  <p className="font-medium text-xl">{time2}</p>
                </div>
                {cr2 ? (
                  <>
                    <CycleCard cycles={5} hours={"seven and a half"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="box-border mt-2 w-full md:w-36 lg:w-1/3">
                <div
                  className="flex flex-col justify-center mt-2 mb-2 rounded-2xl p-3 px-5 bg-gray-300 w-full h-14 cursor-pointer"
                  onClick={() => {
                    setCr3(!cr3);
                  }}
                >
                  <p className="font-medium text-xl">{time3}</p>
                </div>
                {cr3 ? (
                  <>
                    <CycleCard cycles={4} hours={"six"} />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cycles;
