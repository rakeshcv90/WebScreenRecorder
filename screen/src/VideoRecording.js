
import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import { Button, Row, Col, Container, Card, CardBody } from "reactstrap";
import "./VideoRecording.css";

const VideoRecording = () => {
  const [enable, setEnable] = useState(true);
  const [showVideo, setShowVideo] = useState(false); // State to control video preview visibility
  const [status, setStatus] = useState("Idle"); // State to track the recording status

  return (
    <div className="video-recording-container">
      <Container className="pt-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className="shadow-lg rounded">
              <CardBody>
                <h3 className="text-center text-dark">Video Recording</h3>
                <p className="text-center text-muted">
                  Follow the instructions below to record your video.
                </p>

                <ReactMediaRecorder
                  video
                  render={({ startRecording, stopRecording, mediaBlobUrl }) => (
                    <div className="text-center">
                      <p className="status-text">Recording Status: {status}</p>
                      <div className="button-container">
                        <Button
                          color="primary"
                          size="lg"
                          onClick={() => {
                            startRecording();
                            setStatus("Recording..."); // Change status when recording starts
                          }}
                          className="start-button"
                        >
                          Start Recording
                        </Button>
                        <Button
                          color="danger"
                          size="lg"
                          onClick={() => {
                            stopRecording();
                            setShowVideo(true); 
                            setStatus("Recording Stopped"); 
                          }}
                          className="stop-button"
                        >
                          Stop Recording
                        </Button>
                      </div>

                      {showVideo && mediaBlobUrl && (
                        <div className="video-container">
                          <video
                            src={mediaBlobUrl}
                            controls
                            className="video-player"
                          />
                          <div className="button-container mt-3">
                            <Button
                              color="secondary"
                              size="lg"
                              onClick={() => {
                                setShowVideo(false); // Close video preview
                                setStatus("Idle"); // Change status when video is closed
                              }}
                          className="download-button" style={{background:'#e53935'}}
                            >
                              Close Video
                            </Button>
                            <Button
                              color="success"
                              size="lg"
                              onClick={() => {
                                const a = document.createElement("a");
                                a.href = mediaBlobUrl;
                                a.download = "recorded_video.mp4"; // You can change the file name here
                                a.click();
                              }}
                              className="download-button"
                            >
                              Download Video
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoRecording;
