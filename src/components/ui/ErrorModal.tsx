import React from "react"
import ReactDOM from "react-dom"

import classes from "./ErrorModal.module.scss"

interface ModalProps {
  title?: string
  message?: string
  onConfirm: () => void
}

function Backdrop({ onConfirm }: ModalProps): JSX.Element {
  return <div className={classes.backdrop} onClick={onConfirm} />
}

function ModalOverlay({ title, message, onConfirm }: ModalProps): JSX.Element {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <button className={classes.button} onClick={onConfirm}>
          Okay
        </button>
      </footer>
    </div>
  )
}

function ErrorModal({ title, message, onConfirm }: ModalProps) {
  const backdropRoot = document.getElementById("backdrop-root") as HTMLElement
  const overlayRoot = document.getElementById("overlay-root") as HTMLElement

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        overlayRoot
      )}
    </React.Fragment>
  )
}

export default ErrorModal
