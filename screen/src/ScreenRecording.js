import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "./ScreenRecording.css";
const ScreenRecording = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [status, setStatus] = useState("idle"); // Custom status state

  const handleClosePreview = () => {
    setIsPreviewVisible(false);
    setStatus("idle"); // Reset status to idle when preview is closed
  };

  const handleDownloadVideo = (mediaBlobUrl) => {
    const link = document.createElement("a");
    link.href = mediaBlobUrl;
    link.download = "recorded-screen.mp4";
    link.click();
  };
                            
  return (
    <div className="screen-recording-container">
      <div className="card">
        <h3>Screen Recorder</h3>
        <p className="text-muted">Record your screen with ease</p>
        <ReactMediaRecorder
          screen
          render={({ startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status-text">Status: {status}</p>
              <div className="button-container" style={{justifyContent:'center'}}>
                {status === "idle" && (
                  <button
                    className="start-button"
                    onClick={() => {
                      startRecording();
                      setStatus("recording"); // Update status to recording
                    }}
                  >
                    Start Recording
                  </button>
                )}
                {status === "recording" && (
                  <button
                    className="stop-button"
                    onClick={() => {
                      stopRecording();
                      setStatus("stopped"); // Update status to stopped
                      setIsPreviewVisible(true); // Show preview after stopping
                    }}
                  >
                    Stop Recording
                  </button>
                )}
              </div>
              {status === "stopped" && mediaBlobUrl && isPreviewVisible && (
                <div className="video-container">
                  <video
                    className="video-player"
                    src={mediaBlobUrl}
                    controls
                    autoPlay
                    loop
                  />
                  <div className="button-container">
                    <button
                      className="close-preview-button"
                      onClick={handleClosePreview}
                    >
                      Close Preview
                    </button>
                    <button
                      className="download-button"
                      onClick={() => handleDownloadVideo(mediaBlobUrl)}
                    >
                      Download Video
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ScreenRecording;
