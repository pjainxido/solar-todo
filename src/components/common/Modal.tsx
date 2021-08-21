import { Modal  } from "antd";

export const warningModal = (title: string, content: string) => {
  Modal.warning({
    title: title,
    content: content,
  });
};

export const detailModal = (date: string|null , content: string) => {
  Modal.info({
    title: date || 'TODO',
    content: content
  })
}


