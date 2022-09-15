import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bank from "../redux/reducer/bank";

function BankSwitch() {
  const dispatch = useDispatch();
  const bankState = useSelector((state) => state.bank);
  const switchBank = () => {
    dispatch({
      type: "switch",
    });
  };

  useEffect(() => {
    const boxSwitch = document.getElementById("box-switch");
    if (bankState === bank.bankOne) {
      boxSwitch.style.float = "left";
    } else if (bankState === bank.bankTwo) {
      boxSwitch.style.float = "right";
    }
  }, [bankState]);

  return (
    <div className="flex flex-col items-center">
      <p>Bank</p>
      <div onClick={switchBank} className="bg-black w-16 h-5 cursor-pointer">
        <div className="bg-slate-50 h-[80%] w-4 mx-[1px] my-[2px]" id="box-switch"></div>
      </div>
    </div>
  );
}

export default BankSwitch;
