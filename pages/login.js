import React, { useState } from "react";
import router, { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [message, setmessage] = useState(false);
  const [inputValue, setinputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handlesubmit = () => {
    if (email !== "" && password !== "") {
      console.log(inputValue);
      setinputValue({
        email: "",
        password: "",
      });
      setmessage(false);
      router.push("/homepg")
    } else {
      setmessage(true);
    }
  };
  return (
    <>
      <div className="flex flex-col bg-[#9E9CA6] w-full h-screen items-center justify-center">
        <div className="flex flex-col p-5 ">
          <div className="flex flex-col p-5 items-center justify-center bg-white gap-5 ">
            <div>LOGIN</div>
            {message && (
              <div className="text-red-400">*All fields are mandatory</div>
            )}
            <div className="flex flex-col  items-center justify-center gap-5 w-full">
              <div className="flex flex-col w-full gap-5">
                <form>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setinputValue({ ...inputValue, email: e.target.value });
                    }}
                    className="fexl flex-col w-full  p-2 border-solid border-2"
                  ></input>
                </form>

                <form>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(p) => {
                      setinputValue({
                        ...inputValue,
                        password: p.target.value,
                      });
                    }}
                    className="fexl flex-col w-full   p-2 border-solid border-2"
                  ></input>
                </form>
              </div>
              <div className="flex flex-col w-full ">
                <button
                  onClick={handlesubmit}
                  className="fexl flex-col w-full p-2 border-solid border-2 text-white items-center justify-center bg-[#55AAE2] text-xl"
                  
                >
                  LOGIN
                </button>
              </div>
              <div>
                Not a member?{" "}
                <button
                  className="text-[#55AAE2]"
                  onClick={() => router.push("/signin")}
                >
                  Create Account
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
