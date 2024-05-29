import React from "react";

const App = () => {
  return (
    <div className="relative flex justify-between bg-white">
      <div className="w-[680px] h-screen bg-[rgba(220,91,18,1)] flex justify-center items-center">
        <div className="w-[487px] h-[566px] flex flex-col justify-center items-start gap-10">
          <h1 className="font-[700] text-[60px] text-white">Welcome Back</h1>
          <p className="font-[700] text-[20px] text-[rgba(255,255,255,0.7)]">
            Sign in with your credentionals <br></br> to enjoy our uninterrupted
            services
          </p>
          <p className="font-[600] text-[20px] text-[rgba(0,0,0,0.4)]">
            Dont you have an account yet?
          </p>
          <div className="self-center">
            <img
              src="./Shop.png"
              alt="cart"
              style={{ width: "152px", height: "139px" }}
            />
          </div>
          <button className="w-[392px] h-[60px] border-[2px] border-solid border-[rgba(236,236,236,0.76)] rounded-full self-center text-[20px] font-[700] text-white">
            CLICK HERE TO SIGN UP
          </button>
        </div>
      </div>
      <div className="w-[632px] h-[607px] self-center mr-60 flex flex-col justify-center items-center">
        <h1 className="font-[700] text-[70px] text-[rgba(0,0,0,0.8)] mb-8">
          SIGN IN TO SHEY
        </h1>
        <div className="w-[312px] h-[50px] flex justify-between mb-8">
          <img
            src="./Google.png"
            alt="Google icon"
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src="./Linkedin.png"
            alt="Linkedin icon"
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src="./Github.png"
            alt="Github Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="flex justify-between w-[542px]">
          <div className="border-t-[1px] border-solid border-black self-center w-[242px]"></div>
          <div className="font-[600] text-[25px] text-[rgba(16,26,28,1)]">
            OR
          </div>
          <div className="border-t-[1px] border-solid border-black self-center w-[242px]"></div>
        </div>
        <p className="font-[600] text-[25px] text-[rgba(0,0,0,0.4)] mb-6">
          use email and password
        </p>
        <form className="flex flex-col justify-center gap-6 mb-10">
          <input
            type="text"
            placeholder="Username"
            className="w-[542px] h-[66px] bg-[rgba(236,236,236,0.76)] rounded-full pl-6 placeholder-[rgba(0,0,0,0.21)] text-[20px] placeholder-font-500 font-[500]"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[542px] h-[66px] bg-[rgba(236,236,236,0.76)] rounded-full pl-6 placeholder-[rgba(0,0,0,0.21)] text-[20px] placeholder-font-500 font-[500]"
          />
        </form>
        <button className="w-[542px] h-[66px] bg-[rgba(220,91,18,1)] text-[#FFFFFF] font-[700] text-[30px] rounded-full">
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default App;
