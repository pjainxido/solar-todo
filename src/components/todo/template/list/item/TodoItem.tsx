import React from "react";
import { CheckOutlined, DeleteOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import { detailModal } from 'components/common/Modal';
import styled, { css } from "styled-components";
import { STATE } from "utils/constants";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ state: number }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${(props) => {
    switch (props.state) {
      case STATE.TODO:
        return;
      case STATE.INPROGRESS:
        return css`
          border: 1px solid #f48024;
          color: #f48024;
        `;
      case STATE.DONE:
        return css`
          border: 1px solid #dddddd;
          color: #dddddd;
        `;
    }
  }}
`;
const Text = styled.div<{ state: number }>`
  flex: 2;
  font-size: 16px;
  color: #119955;
  overflow:hidden;
  text-overflow: ellipsis;
  ${(props) => {
    switch (props.state) {
      case STATE.INPROGRESS:
        return css`
          color: #f48024;
          text-decoration: underline;
        `;
      case STATE.DONE:
        return css`
          color: #ced4da;
          text-decoration: line-through;
        `;
    }
  }}
`;

const DateText = styled.div<{ state: number }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) => {
    switch (props.state) {
      case STATE.INPROGRESS:
        return css`
          color: #f48024;
          text-decoration: underline;
        `;
      case STATE.DONE:
        return css`
          color: #ced4da;
          text-decoration: line-through;
        `;
    }
  }}
`;

interface TodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: Itodo;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: TodoItemProps) => {
  const { text, deadLine, state } = todo;

  const handleState = () => {
    toggleTodo(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  const renderStateIcon = (id: number) => {
    switch (id) {
      case STATE.TODO:
        return;
      case STATE.INPROGRESS:
        return <ClockCircleOutlined />;
      case STATE.DONE:
        return <CheckOutlined />;
    }
  };

  const checkDetail = () =>{
    detailModal(deadLine, text);

  }

  return (
    <TodoItemBlock>
      <CheckCircle state={state} onClick={handleState}>
        {renderStateIcon(state)}
        {/* {done && <CheckOutlined />} */}
      </CheckCircle>
      <Text onClick={checkDetail} state={state}>{text}</Text>
      {deadLine && <DateText state={state}>{deadLine}</DateText>}
      <Remove onClick={handleRemove}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
