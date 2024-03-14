import "./styles/Modal.scss";
import { modalContext } from "@context/store";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const overlayElement = document.getElementById("overlays");

export function Backdrop(): JSX.Element {
  const hideModal = modalContext((state) => state.hide);
  return <section onClick={() => hideModal()} id="backdrop"></section>;
}

export default function Modal(): JSX.Element {
  const { layout } = modalContext((state) => state);

  return (
    <Fragment>
      {overlayElement && ReactDOM.createPortal(<Backdrop />, overlayElement)}
      {overlayElement &&
        ReactDOM.createPortal(<Fragment>{layout}</Fragment>, overlayElement)}
    </Fragment>
  );
}
