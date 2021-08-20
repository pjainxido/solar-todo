import { DatePicker } from "antd";
import { Moment } from "moment";

interface TodoDatePickerProps{
  handleDate: (item: Moment | null) => void;
}

const TodoDatePicker = ({handleDate}: TodoDatePickerProps) => {
  const onChange= (date: Moment | null) => {
    handleDate(date);
  };
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
};

export default TodoDatePicker;
