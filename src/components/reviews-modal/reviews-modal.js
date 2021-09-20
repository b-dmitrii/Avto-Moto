import React, {useEffect} from "react";
import ReactDOM from "react-dom";

const Modal = ({children, onCancel, isOpen}) => {
  const onEscKeydown = React.useCallback(
      (evt) => {
        if (evt.key === `Escape`) {
          onCancel();
        }
      },
      [onCancel]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener(`keydown`, onEscKeydown);
    }

    return () => {
      document.removeEventListener(`keydown`, onEscKeydown);
    };
  }, [isOpen, onEscKeydown]);

  return (
    isOpen &&
    ReactDOM.createPortal(
        <section className="modal">
          <div className="modal__overlay" onClick={onCancel}>
            <div
              className="modal__content-container"
              onClick={(evt) => {
                evt.stopPropagation();
              }}
            >
              <button
                className="modal__close-button"
                onClick={onCancel}
                type="button"
              >
              Закрыть модальное окно
              </button>
              {children}
            </div>
          </div>
        </section>,
        document.body
    )
  );
};

export default Modal;
