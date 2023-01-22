import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

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
  checkBoxValue: CheckboxValueType[];
  setCheckboxValue: Dispatch<
    SetStateAction<CheckboxValueType[] | never[] | any>
  >;
}

const CheckBoxOption = (props: Props) => {
  const { questionoption, checkBoxValue, setCheckboxValue } = props;
  const [checkboxOptions, setCheckBoxOptions] = useState<string[]>([]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckboxValue(checkedValues);
  };
  useEffect(() => {
    const options: string[] = [];
    questionoption.forEach((label) => {
      options.push(label.optionvalue);
    });
    if (options.length > 0) setCheckBoxOptions(options);
  }, [questionoption]);

  return (
    <>
      <div>
        <Checkbox.Group
          options={checkboxOptions}
          onChange={onChange}
          value={checkBoxValue}
          className="vertical"
        />
      </div>
    </>
  );
};

export default CheckBoxOption;
