import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LogoutOutlined } from "@ant-design/icons";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const UserInfoText = styled.div`
  font-size: 22px;
  color: #f48024;
  padding-top: 5px;
  padding-right: 10px;
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

const LogoutButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  // font-size: 22px;
`;

interface todoHeadProps {
  user: string;
  logout: () => void;
}

const TodoHead = ({ user, logout }: todoHeadProps) => {
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
      <UserInfoText>{`${user}'s TODO`}</UserInfoText>
      <DayText>{dayString}</DayText>
      <DateText>{dateString}</DateText>
      <LogoutButton onClick={logout}>
        <LogoutOutlined />
      </LogoutButton>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
