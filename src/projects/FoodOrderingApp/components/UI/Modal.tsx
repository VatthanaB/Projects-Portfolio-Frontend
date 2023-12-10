import React from "react";
import classes from "./Modal.module.css";
import ReractDOM from "react-dom";

interface BackdropProps {
  hideCartHandler: () => void;
}
const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} onClick={props.hideCartHandler} />;
};

interface ModalOverlayProps {
  children: React.ReactNode;
}
const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const element = document.getElementById("overlays");

if (!element) throw new Error("The element with id 'overlays' doesn't exist");

const portalElement: HTMLElement = element;

interface ModalProps {
  hideCartHandler: () => void;
  children: React.ReactNode;
}
function Modal(props: ModalProps) {
  return (
    <React.Fragment>
      {ReractDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalElement
      )}
      {ReractDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
