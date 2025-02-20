import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementByOne,
  incrementByTen,
  decrementByOne,
  decrementByTen,
  reset,
} from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Counter</h2>
      <div className="text-4xl font-bold mb-4">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(decrementByTen())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -10
        </button>
        <button
          onClick={() => dispatch(decrementByOne())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -1
        </button>
        <button
          onClick={() => dispatch(incrementByOne())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          +1
        </button>
        <button
          onClick={() => dispatch(incrementByTen())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          +10
        </button>
      </div>
      <button
        onClick={() => dispatch(reset())}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Reset
      </button>
    </div>
  );
};

export default Counter;
