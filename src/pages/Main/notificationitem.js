import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdClose } from 'react-icons/md';

import styles from "./notification.module.scss";

export default function Index() {
  return (
    <div className={styles["Notification"]}>
      <FaCheckCircle color="#09B66D" size={20} />
      <strong>Notificação de sucesso</strong>
      <p>Descrição vai aqui</p>
      <MdClose color="#122E39" size={18} />
    </div>
  );
}
