import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScreenRecording from "./ScreenRecording";
import ActionType from "./ActionType";
import VideoRecording from "./VideoRecording";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ActionType />} />
        <Route path="/actionatype" element={<ActionType />} />
        <Route path="/screenrecording" element={<ScreenRecording />} />
        <Route path="/videorecording" element={<VideoRecording />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Router;
