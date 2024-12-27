import { useEffect, useState } from "react";
import DemoImages from "../DemoImages/DemoImages";

const Counter = () => {
  // let value = 0;

  // Local State Varaiable
  let [value, setValue] = useState(0);

  const HandleIncrementValue = () => {
    setValue(value+1)
  }

  const HandleDecrementValue = () => {
    setValue(value-1)
  }

  return (
    <>
      <p>Counter</p>

      <p>{value}</p>

      <DemoImages onInc={HandleIncrementValue} onDec={HandleDecrementValue} />
    </>
  );
};

export default Counter;
