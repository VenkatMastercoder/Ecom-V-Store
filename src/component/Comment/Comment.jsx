import { useState } from "react";

const Comment = () => {
  // Local State Varaiable
  // const [name,setName] = useState("");
  // const [message,setMessage] = useState("");

  // Optimize
  const [data, setData] = useState({ name: "", message: "" });

  const [finData, setFinData] = useState([]);

  // setData(Arg)
  return (
    <>
      <p>Comment Page</p>

      <label htmlFor="name"></label>
      <input
        id="name"
        type="text"
        onChange={(e) => {
          // setName(e.target.value)
          setData((prev) => {
            return { ...prev, name: e.target.value };
          });
        }}
      />

      <label htmlFor="message"></label>
      <input
        id="message"
        type="text"
        onChange={(e) => {
          setData((prev) => {
            return { ...prev, message: e.target.value };
          });
        }}
      />

      <button
        onClick={() => {
          setFinData((prev) => {
            return [...prev, data];
          });
        }}>
        Submit
      </button>

      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(finData)}</p>
    </>
  );
};

export default Comment;
