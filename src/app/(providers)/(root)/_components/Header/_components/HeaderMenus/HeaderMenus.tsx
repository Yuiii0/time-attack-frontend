"use client";

import LogInModal from "@/components/LogInModal";
import { setModal } from "@/redux/slices/modal.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  // const { isLoggedIn } = useAuth();
  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
    console.log("fhrmdls");
  };

  return (
    <div className="flex gap-x-4 ml-auto text-sm">
      {/* <button>로그아웃</button> */}
      <>
        <Link href="/sign-up">회원가입</Link>
        <button onClick={handleClickLogIn}>로그인</button>
      </>
    </div>
  );
}

export default HeaderMenus;
