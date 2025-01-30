"use client";
// React
import React from "react";
// Input OTP
import { OTPInput, SlotProps } from "input-otp";

export default function Early() {
  return (
    <div className="double-color w-full">
      <div
        className="centered mt-[32px] xl:h-[320px] flex items-center justify-center px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]"
        id="early"
      >
        <div className="bg-greenLight flex flex-col  items-center text-center w-screen px-[20px] xl:px-[40px] py-[32px]">
          <div className="max-w-[500px] mx-auto items-center flex flex-col">
            <h1 className="text-4xl text-greenDark mb-[8px] font-spectral">
              Early Access
            </h1>
            <p className="mb-[14px] ">
              Enter your invite code to gain early access
            </p>
            <OTPInput
              maxLength={6}
              containerClassName="group flex items-center has-[:disabled]:opacity-30"
              render={({ slots }) => (
                <>
                  <div className="flex">
                    {slots.map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
            <div className="bg-greenDark text-white p-5 rounded-lg mt-[32px] w-fit">
              Access will open soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slot(props: SlotProps) {
  return (
    <div className="bg-[#006F3710] mr-4 rounded-lg outline outline-0 outline-accent-foreground/20 text-greenDark border-greenDark border-1 relative w-10 h-12 md:w-12 md:h-16 text-[2rem] flex items-center justify-center transition-all duration-300 border-border border-y border-r first:border-l  group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20">
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

// You can emulate a fake textbox caret!
function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white"></div>
    </div>
  );
}
