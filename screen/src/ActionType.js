import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActionType = () => {
  const [selectedAction, setSelectedAction] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (action) => {
    setSelectedAction(action);
    if (action === "Screen Record") {
        setTimeout(()=>{
            navigate("/screenrecording");
        },1000)
 
      } else {
        setTimeout(()=>{
            navigate("/videorecording");
        },1000)

      }
  };

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "80vh",
    //     background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    //     color: "#fff",
    //     fontFamily: "Arial, sans-serif",
    //     textAlign: "center",
    //     padding: "20px",
    //   }}
    // >
    //   <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
    //     Choose Your Action
    //   </h1>
    //   <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
    //     Select one of the options below to start recording.
    //   </p>
    //   <div
    //     style={{
    //       display: "flex",
    //       gap: "30px",
    //       flexWrap: "wrap",
    //       justifyContent: "center",
    //     }}
    //   >
    //     {/* Screen Record Button */}
    //     <button
    //       onClick={() => handleSelect("Screen Record")}
    //       style={{
    //         padding: "20px",
    //         borderRadius: "10px",
    //         border: "none",
    //         background: selectedAction === "Screen Record" ? "#ff6f61" : "#fff",
    //         color: selectedAction === "Screen Record" ? "#fff" : "#333",
    //         fontSize: "1rem",
    //         fontWeight: "bold",
    //         cursor: "pointer",
    //         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    //         transition: "transform 0.3s ease, background 0.3s ease",
    //         textAlign: "center",
    //         width: "150px",
    //       }}
    //       onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
    //       onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    //     >
    //       <img
    //         src="https://img.icons8.com/ios-filled/100/000000/video-call.png"
    //         alt="Screen Record"
    //         style={{ width: "50px", marginBottom: "10px" }}
    //       />
    //       Screen Record
    //     </button>

    //     {/* Camera Record Button */}
    //     <button
    //       onClick={() => handleSelect("Camera Record")}
    //       style={{
    //         padding: "20px",
    //         borderRadius: "10px",
    //         border: "none",
    //         background: selectedAction === "Camera Record" ? "#ff6f61" : "#fff",
    //         color: selectedAction === "Camera Record" ? "#fff" : "#333",
    //         fontSize: "1rem",
    //         fontWeight: "bold",
    //         cursor: "pointer",
    //         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    //         transition: "transform 0.3s ease, background 0.3s ease",
    //         textAlign: "center",
    //         width: "150px",
    //       }}
    //       onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
    //       onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    //     >
    //       <img
    //         src="https://img.icons8.com/ios-filled/100/000000/camera.png"
    //         alt="Camera Record"
    //         style={{ width: "50px", marginBottom: "10px" }}
    //       />
    //       Camera Record
    //     </button>
    //   </div>
    // </div>
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "95.7vh",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden", // Prevent scroll
  }}
>
  <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
    Choose Your Action
  </h1>
  <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
    Select one of the options below to start recording.
  </p>
  <div
    style={{
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {/* Screen Record Button */}
    <button
      onClick={() => handleSelect("Screen Record")}
      aria-label="Screen Record"
      style={{
        padding: "20px",
        borderRadius: "10px",
        border: "none",
        background: selectedAction === "Screen Record" ? "#ff6f61" : "#fff",
        color: selectedAction === "Screen Record" ? "#fff" : "#333",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, background 0.3s ease",
        textAlign: "center",
        width: "150px",
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      <img
        src="https://img.icons8.com/ios-filled/100/000000/video-call.png"
        alt="Screen Record"
        style={{ width: "50px", marginBottom: "10px" }}
      />
      Screen Record
    </button>

    {/* Camera Record Button */}
    <button
      onClick={() => handleSelect("Camera Record")}
      aria-label="Camera Record"
      style={{
        padding: "20px",
        borderRadius: "10px",
        border: "none",
        background: selectedAction === "Camera Record" ? "#ff6f61" : "#fff",
        color: selectedAction === "Camera Record" ? "#fff" : "#333",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, background 0.3s ease",
        textAlign: "center",
        width: "150px",
      }}
      onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      <img
        src="https://img.icons8.com/ios-filled/100/000000/camera.png"
        alt="Camera Record"
        style={{ width: "50px", marginBottom: "10px" }}
      />
      Camera Record
    </button>
  </div>
</div>

  );
};

export default ActionType;
