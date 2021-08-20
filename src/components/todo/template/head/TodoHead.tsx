import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  const [dayString, setDayString] = useState("");
  const [dateString, setDateString] = useState("");

  const loadCurrentDate = () => {
    const currentDate = new Date();
    const locale = "en-US";
    setDateString(
      currentDate.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setDayString(
      currentDate.toLocaleDateString(locale, {
        weekday: "long",
      })
    );
  };

  useEffect(() => {
    loadCurrentDate();
  }, []);

  return (
    <TodoHeadBlock>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
