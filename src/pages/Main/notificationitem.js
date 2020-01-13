import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./notification.module.scss";

export default function Index() {
  return (
    <div className={styles["Notification"]}>
      <FaCheckCircle color="#09B66D" />
      <strong>Notificação de sucesso</strong>
      <p>Descrição do bagulho muito da hora</p>
    </div>
  );
}
