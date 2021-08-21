import { DatePicker } from "antd";
import { Moment } from "moment";
import { ReactElement } from "react";

interface TodoDatePickerProps {
  handleDate: (item: Moment | null) => void;
}

const TodoDatePicker = ({ handleDate }: TodoDatePickerProps): ReactElement => {
  const onChange = (date: Moment | null) => {
    handleDate(date);
  };
  return (
    <div>
      <DatePicker onChange={onChange} size="large" />
    </div>
  );
};

export default TodoDatePicker;
