// Importing necessary modules and CSS
import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

// Interface for Backdrop component props
interface BackdropProps {
  hideCartHandler: () => void; // Function to hide the cart
}

// Backdrop component
const Backdrop = (props: BackdropProps) => {
  // On click, the cart is hidden
  return <div className={classes.backdrop} onClick={props.hideCartHandler} />;
};

// Interface for ModalOverlay component props
interface ModalOverlayProps {
  children: React.ReactNode; // Children components
}

// ModalOverlay component
const ModalOverlay = (props: ModalOverlayProps) => {
  // Renders children components inside a div
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Get the element with id 'overlays'
const element = document.getElementById("overlays");

// If the element doesn't exist, throw an error
if (!element) throw new Error("The element with id 'overlays' doesn't exist");

// Cast the element to HTMLElement
const portalElement: HTMLElement = element;

// Interface for Modal component props
interface ModalProps {
  hideCartHandler: () => void; // Function to hide the cart
  children: React.ReactNode; // Children components
}

// Modal component
function Modal(props: ModalProps) {
  return (
    <React.Fragment>
      {/* Render Backdrop component in 'portalElement' */}
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalElement
      )}
      {/* Render ModalOverlay component in 'portalElement' */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

// Export Modal component
export default Modal;
