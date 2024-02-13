import { setModal } from "@/redux/slices/modal.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };
  return (
    <div
      onClick={handleClickBackdrop}
      className="fixed top-0 left-0 bg-black/50 w-screen h-screen z-30"
    >
      <div onClick={(e) => e.stopPropagation()} className="bg-white">
        <h2 className="font-bold mb-8 text-2xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
