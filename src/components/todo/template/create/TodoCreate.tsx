import React, { useState } from "react";
import styled from "styled-components";
import moment, { Moment } from "moment";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DATE_FORMAT, STATE } from "utils/constants";
import { warningModal } from "components/common/Modal";
import { Itodo } from "components/todo/TodoService";
import TodoDatePicker from "./TodoDatePicker";

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({ nextId, createTodo, incrementNextId }: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [deadLine, setDeadLine] = useState<string | null>(null);

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleDate = (date: Moment | null) => {
    const dateString = date?.format(DATE_FORMAT);
    if (dateString) setDeadLine(dateString);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    if (!value) {
      warningModal("WARN", "할일을 입력해주세요");
      return;
    }
    const curDate = moment().format(DATE_FORMAT);

    if (moment(deadLine).isBefore(curDate)) {
      warningModal("WARN", "과거 날짜를 입력하셨습니다.");
      return;
    }

    createTodo({
      id: nextId,
      text: value,
      state: STATE.TODO,
      deadLine: deadLine,
    });
    incrementNextId(); // nextId 하나 증가

    setValue(""); // input 초기화
    setOpen(false); // open 닫기
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
          />
          <TodoDatePicker handleDate={handleDate} />
          <CircleButton onClick={handleToggle} open={open}>
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);
