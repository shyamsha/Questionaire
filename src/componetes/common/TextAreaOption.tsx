import React, { Dispatch, SetStateAction } from "react";
import { Input } from "antd";

const { TextArea } = Input;
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
  textAreaValue: string;
  setTextAreaValue: Dispatch<SetStateAction<string>>;
}

const TextAreaOption = (props: Props) => {
  const { textAreaValue, setTextAreaValue } = props;

  const onChangeTextArea = (e: { target: { value: string } }) => {
    setTextAreaValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <TextArea
        rows={4}
        placeholder="Write text here"
        maxLength={100}
        onChange={onChangeTextArea}
        value={textAreaValue}
        allowClear
        showCount
        className="p-b"
      />
    </>
  );
};

export default TextAreaOption;
