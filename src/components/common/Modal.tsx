import { Modal  } from "antd";

export const warningModal = (title: string, content: string) => {
  Modal.warning({
    title: title,
    content: content,
  });
};


