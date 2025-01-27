// import React, { useState } from "react";
// import { ReactMediaRecorder } from "react-media-recorder";
// import "./ScreenRecording.css";
// const ScreenRecording = () => {
//   const [isPreviewVisible, setIsPreviewVisible] = useState(false);
//   const [status, setStatus] = useState("idle"); 

//   const handleClosePreview = () => {
//     setIsPreviewVisible(false);
//     setStatus("idle"); 
//   };

//   const handleDownloadVideo = (mediaBlobUrl) => {
//     const link = document.createElement("a");
//     link.href = mediaBlobUrl;
//     link.download = "recorded-screen.mp4";
//     link.click();
//   };
                            
//   return (
//     <div className="screen-recording-container">
//       <div className="card">
//         <h3>Screen Recorder</h3>
//         <p className="text-muted">Record your screen with ease</p>
//         <ReactMediaRecorder
//           screen
//           render={({ startRecording, stopRecording, mediaBlobUrl }) => (
//             <div>
//               <p className="status-text">Status: {status}</p>
//               <div className="button-container" style={{justifyContent:'center'}}>
//                 {status === "idle" && (
//                   <button
//                     className="start-button"
//                     onClick={() => {
//                       startRecording();
//                       setStatus("recording"); 
//                     }}
//                   >
//                     Start Recording
//                   </button>
//                 )}
//                 {status === "recording" && (
//                   <button
//                     className="stop-button"
//                     onClick={() => {
//                       stopRecording();
//                       setStatus("stopped"); 
//                       setIsPreviewVisible(true); 
//                     }}
//                   >
//                     Stop Recording
//                   </button>
//                 )}
//               </div>
//               {status === "stopped" && mediaBlobUrl && isPreviewVisible && (
//                 <div className="video-container">
//                   <video
//                     className="video-player"
//                     src={mediaBlobUrl}
//                     controls
//                     autoPlay
//                     loop
//                   />
//                   <div className="button-container">
//                     <button
//                       className="close-preview-button"
//                       onClick={handleClosePreview}
//                     >
//                       Close Preview
//                     </button>
//                     <button
//                       className="download-button"
//                       onClick={() => handleDownloadVideo(mediaBlobUrl)}
//                     >
//                       Download Video
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default ScreenRecording;
import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "./ScreenRecording.css";

const ScreenRecording = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [status, setStatus] = useState("idle");
  const [customStream, setCustomStream] = useState(null); // Store custom MediaStream

  const handleClosePreview = () => {
    setIsPreviewVisible(false);
    setStatus("idle");
  };

  const handleDownloadVideo = (mediaBlobUrl) => {
    const link = document.createElement("a");
    link.href = mediaBlobUrl;
    link.download = "recorded-screen.mp4";
    link.click();
  };

  const setupMediaStream = async () => {
    try {
      // Step 1: Get the screen stream with system audio
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true, // This requests system audio
      });

      // Step 2: Check if system audio is included, if not fallback to microphone
      const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Combine both streams using Web Audio API
      const audioContext = new AudioContext();
      const screenAudio = audioContext.createMediaStreamSource(screenStream);
      const micAudio = audioContext.createMediaStreamSource(micStream);
      const destination = audioContext.createMediaStreamDestination();

      screenAudio.connect(destination);
      micAudio.connect(destination);

      // Combine video from screen and mixed audio into one MediaStream
      const combinedStream = new MediaStream([
        ...screenStream.getVideoTracks(),
        ...destination.stream.getAudioTracks(),
      ]);

      setCustomStream(combinedStream); // Save custom stream
    } catch (error) {
      console.error("Error setting up media stream:", error);
      setStatus("idle");
    }
  };

  return (
    <div className="screen-recording-container">
      <div className="card">
        <h3>Screen Recorder</h3>
        <p className="text-muted">Record your screen with system sound</p>
        <ReactMediaRecorder
          screen
          mediaStream={customStream} // Provide the custom MediaStream
          render={({ startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status-text">Status: {status}</p>
              <div className="button-container" style={{ justifyContent: "center" }}>
                {status === "idle" && (
                  <button
                    className="start-button"
                    onClick={async () => {
                      await setupMediaStream(); // Prepare the stream
                      startRecording(); // Start recording
                      setStatus("recording");
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
                      setStatus("stopped");
                      setIsPreviewVisible(true);
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
