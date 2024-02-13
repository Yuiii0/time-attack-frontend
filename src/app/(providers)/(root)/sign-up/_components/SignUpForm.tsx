"use client";

import { useRef } from "react";

function SignUpForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pwConfirmInputRef = useRef<HTMLInputElement>(null);

  //useMutation
  //useAuth

  return (
    <form
      className="max-w-sm w-full mx-auto flex flex-col gap-y-4 items-center "
      onSubmit={(e) => {
        e.preventDefault();

        const email = emailInputRef.current?.value;
        const pw = pwInputRef.current?.value;
        const pwConfirm = pwConfirmInputRef.current?.value;

        if (pw !== pwConfirm) return alert("비밀번호가 일치하지 않습니다");
        if (!email || !pw || !pwConfirm) return alert("모든 값을 입력해주세요");

        //mutate
      }}
    >
      <div className="w-full">
        <label className="text-sm font-medium" htmlFor="email">
          이메일
        </label>
        <input
          className="border w-full p-2 rounded-md"
          type="text"
          id="email"
          ref={emailInputRef}
        ></input>
      </div>
      <div className="w-full">
        <label className="text-sm font-medium" htmlFor="password">
          비밀번호
        </label>
        <input
          className="border w-full p-2  rounded-md"
          type="text"
          id="password"
          ref={pwInputRef}
        ></input>
      </div>
      <div className="w-full">
        <label className="text-sm font-medium" htmlFor="password2">
          비밀번호 확인
        </label>
        <input
          className="border w-full p-2 rounded-md"
          type="text"
          id="password2"
          ref={pwConfirmInputRef}
        ></input>
      </div>
      <button className="bg-black text-white w-full p-2 py-3 mt-3 rounded-md">
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
