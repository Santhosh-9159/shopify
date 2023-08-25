import { useRouter } from "next/router";
import React, { useState } from "react";

function Login() {
  const router = useRouter();
  const [validate, setvalidate] = useState(false);
  const [input, setinput] = useState({
    fnName: "",
    lsName: "",
    email: "",
    password: "",
  });
  const { fnName, lsName, email, password } = input;
  const submithandler = () => {
    if (fnName !== "" && lsName !== "" && email !== "" && password !== "") {
      console.log(input);
      setinput({
        fnName: "",
        lsName: "",
        email: "",
        password: "",
      });
      setvalidate(false);
      router.push("/homepg")
    } else {
      console.log("invalid input");
      setvalidate(true);
    }
  };
  return (
    <>
      <div className="flex flex-col bg-[#9E9CA6] w-full h-screen items-center justify-center">
        <div className="flex flex-col p-5 ">
          <div className="flex flex-col p-5 items-center justify-center bg-white gap-5 ">
            <div>SIGN UP</div>
            {validate && (
              <div className="text-red-400">*All fields are mandatory</div>
            )}
            <div className="flex flex-col  items-center justify-center gap-5 w-full">
              <div className="flex flex-col w-full gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  value={fnName}
                  onChange={(e) => {
                    setinput({ ...input, fnName: e.target.value });
                  }}
                  className="fexl flex-col w-full  p-2 border-solid border-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lsName}
                  onChange={(e) => {
                    setinput({ ...input, lsName: e.target.value });
                  }}
                  className="fexl flex-col w-full  p-2 border-solid border-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setinput({ ...input, email: e.target.value });
                  }}
                  className="fexl flex-col w-full  p-2 border-solid border-2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setinput({ ...input, password: e.target.value });
                  }}
                  className="fexl flex-col w-full  p-2 border-solid border-2"
                />
              </div>
              <div className="flex flex-col w-full ">
                <button
                  onClick={submithandler}
                  className="fexl flex-col w-full p-2 border-solid border-2 text-white items-center justify-center bg-[#55AAE2] text-xl"
                >
                  SIGN UP
                </button>
              </div>
              <div className="flex gap-3">
                Already have account?
                <button
                  className="text-[#55AAE2]"
                  onClick={() => router.push("/login")}
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
