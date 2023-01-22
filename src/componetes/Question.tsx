import React, { Dispatch, SetStateAction, useState } from "react";
import { Card, Button } from "antd";
import RadioOption from "./common/RadioOption";
import DateOption from "./common/DateOption";
import TextAreaOption from "./common/TextAreaOption";
import CheckBoxOption from "./common/CheckBoxOption";

interface Props {
  index: number;
  questionId: number;
  question: string;
  questiontype: string;
  questionoption: Array<any>;
  validation: boolean;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  questionLength: number;
}
const Question = (props: Props) => {
  const [radioValue, setRadioValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [checkBoxValue, setCheckboxValue] = useState([]);
  const {
    question,
    index,
    questiontype,
    questionoption,
    validation,
    questionId,
    currentIndex,
    setCurrentIndex,
    questionLength,
  } = props;

  const renderCurrentIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const renderPreCurrentIndex = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const renderQuestionType = (type: string) => {
    if (type === "Radio") {
      return (
        <div className="p-b">
          <RadioOption
            questionoption={questionoption}
            validation={validation}
            questionId={questionId}
            radioValue={radioValue}
            setRadioValue={setRadioValue}
          />
        </div>
      );
    }
    if (type === "Date") {
      return (
        <div className="p-b">
          <DateOption
            questionoption={questionoption}
            validation={validation}
            questionId={questionId}
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
        </div>
      );
    }
    if (type === "Textarea") {
      return (
        <div className="p-b">
          <TextAreaOption
            questionoption={questionoption}
            validation={validation}
            questionId={questionId}
            textAreaValue={textAreaValue}
            setTextAreaValue={setTextAreaValue}
          />
        </div>
      );
    }
    if (type === "Checkbox") {
      return (
        <div className="p-b">
          <CheckBoxOption
            questionoption={questionoption}
            validation={validation}
            questionId={questionId}
            checkBoxValue={checkBoxValue}
            setCheckboxValue={setCheckboxValue}
          />
        </div>
      );
    }
  };

  return (
    <>
      <div className="container">
        {index === currentIndex && (
          <Card className="ant-card-body" bordered>
            <div className="card-border"></div>
            <div className="question-title">{question}</div>
            {renderQuestionType(questiontype)}
            <div className="card-border button-next">
              {currentIndex > 0 && (
                <Button
                  className="m-r"
                  size="middle"
                  onClick={renderPreCurrentIndex}
                >
                  Previous
                </Button>
              )}
              {questionLength !== currentIndex + 1 ? (
                <Button
                  className="m-r"
                  size="middle"
                  onClick={renderCurrentIndex}
                  disabled={validation && !radioValue}
                >
                  Next
                </Button>
              ) : (
                <Button className="m-r" size="middle" onClick={() => null}>
                  submit
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default Question;
