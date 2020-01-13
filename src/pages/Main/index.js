import React from "react";
import { toast } from "react-toastify";
import { css } from "glamor";
import Index from "./notificationitem";

import styles from "./styles.module.scss";

function Main() {
  function handleDefault() {
    toast("Mensagem default");
  }

  function handleError() {
    toast.error("Mensagem error");
  }

  function handleSuccess() {
    toast.success("Mensagem success");
  }

  function handleInfo() {
    toast.info("Mensagem info");
  }

  function handleWarn() {
    toast.warn("Mensagem warn");
  }

  function handleCustom() {
    toast.success(<Index />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
      closeButton: false,
      className: css({
        width: 550,
        height: 44,
        marginLeft: -240,
        minHeight: 30,
        background: "#E1FAE6",
        border: "1px solid #B0DEB9",
        borderLeft: "3px solid #09B66D",
        boxSizing: "border-box"
      }),
      bodyClassName: css({
        paddingRight: 10,
        fontStyle: "normal",
        fontWeight: 800,
        fontSize: "16px",
        color: "#44566C"
      })
    });
  }

  return (
    <div className={styles["Content"]}>
      <div className={styles["Buttons"]}>
        <button type="button" onClick={handleDefault}>
          Default
        </button>
        <button type="button" onClick={handleError}>
          Error
        </button>
        <button type="button" onClick={handleSuccess}>
          Success
        </button>
        <button type="button" onClick={handleWarn}>
          Warn
        </button>
        <button type="button" onClick={handleInfo}>
          Info
        </button>
        <button type="button" onClick={handleCustom}>
          Custom
        </button>
      </div>
    </div>
  );
}

export default Main;
