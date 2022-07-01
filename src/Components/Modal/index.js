function Modal({
                   children,
                   onClose
               }) {
    return (
        <div>
            <div onClick={() => { onClose(); }} className="w-full h-full bg-fondoTransparente fixed top-0 left-0 opacity-90"></div>
            <div className="opacity-100 fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                {children}
            </div>
        </div>
    );
}

export default Modal;
