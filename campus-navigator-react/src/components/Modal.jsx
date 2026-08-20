function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div id="modal" onClick={onClose}>

            <div className="modal-content"
                onClick={(event) => event.stopPropagation()}
            >

                <button id="close-modal" onClick={onClose}>✕</button>

                <div id="modal-body">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Modal;