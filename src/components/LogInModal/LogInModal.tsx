import Modal from "../Modal";

function LogInModal() {
  const handleClickLogIn = () => {};
  return (
    <Modal title="로그인">
      <div className="w-full">
        <label className="text-sm font-medium" htmlFor="email">
          이메일
        </label>
        <input
          className="border w-full p-2 rounded-md"
          type="text"
          id="email"
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
        ></input>
      </div>
      <button
        className="bg-black text-white w-full p-2 py-3 mt-3 rounded-md"
        onClick={handleClickLogIn}
      >
        로그인
      </button>
    </Modal>
  );
}

export default LogInModal;
