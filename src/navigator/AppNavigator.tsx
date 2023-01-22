import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questionnaires from "../componetes/Questionnaires";
import { Result } from "antd";

const AppNavigator = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questionnaires />} />
          <Route
            path="*"
            element={
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppNavigator;
