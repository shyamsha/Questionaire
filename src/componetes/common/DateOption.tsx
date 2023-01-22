import React, { Dispatch, SetStateAction } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

interface T {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: [] | null;
}
interface Props {
  questionoption: Array<T>;
  validation: boolean;
  questionId: number;
  dateValue: string;
  setDateValue: Dispatch<SetStateAction<string | any>>;
}

const DateOption = (props: Props) => {
  const { setDateValue } = props;
  const onChangeDate: DatePickerProps["onChange"] | any = (
    dateString: [string, string] | string
  ) => {
    setDateValue(dateString);
  };

  return (
    <>
      <Space direction="vertical" size={12}>
        <DatePicker
          showTime={{ format: "HH:mm" }}
          onChange={onChangeDate}
          format="DD/MM/YYYY HH:mm"
        />
      </Space>
    </>
  );
};

export default DateOption;
