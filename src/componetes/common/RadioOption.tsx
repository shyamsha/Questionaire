import React, { Dispatch, SetStateAction } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Divider } from "antd";

interface T {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: [];
}
interface Props {
  questionoption: Array<T>;
  validation: boolean;
  questionId: number;
  radioValue: string;
  setRadioValue: Dispatch<SetStateAction<string>>;
}

const RadioOption = (props: Props) => {
  const { questionoption, radioValue, setRadioValue } = props;

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };
  return (
    <>
      <Divider />
      <Radio.Group onChange={onChange} value={radioValue}>
        <Space direction="vertical">
          {questionoption.map((option, i) => {
            return (
              <div key={option.optionid}>
                <Radio
                  key={option.optionid}
                  value={option.optionvalue}
                  defaultChecked={option.selected}
                >
                  {option.optionvalue}
                </Radio>
              </div>
            );
          })}
        </Space>
      </Radio.Group>
      <Divider />
    </>
  );
};

export default RadioOption;
