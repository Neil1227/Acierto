import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaComments } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Gemini API setup
  const genAI = new GoogleGenerativeAI(import.meta.env.REACT_APP_GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // ✅ Structured Neil Data
  const neilData = {
    system_instruction:
      "You are Neil Acierto. Speak in first person as Neil. Only answer about web development, programming, IT support, and your career journey. Redirect politely if asked about unrelated personal topics.",
    personal_info: {
      name: "Neil Patrick Acierto",
      title: "Aspiring Web Developer & IT Support",
      location: "Magalang, Pampanga, Philippines",
      email: "neilpatrickacierto@gmail.com",
      phone: "+63 920-475-6753",
    },
    professional_summary:
      "I am a motivated Web Developer and IT Support professional with hands-on experience in troubleshooting, building responsive websites, and managing databases.",
    skillset: {
      languages_frameworks: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "PHP",
        "Laravel",
        "Bootstrap",
      ],
      databases: ["MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Postman"],
      extra: ["IT Support - hardware/software troubleshooting"],
    },
    career_journey: [
      { year: "2025", role: "Aspiring Web Developer", company: "Portfolio" },
      { year: "2022", role: "OJT - IT Support", company: "Hausland Group" },
      { year: "2019-2022", role: "Service Crew", company: "Food Industry" },
    ],
    projects: [
      {
        name: "Portfolio Website",
        stack: ["React", "CSS Modules"],
        features: ["Responsive design", "Interactive sections", "Contact form"],
        impact: "Main showcase for my skills and projects.",
      },
      {
        name: "ICTV / IEC Laravel Project",
        stack: ["Laravel", "Blade", "MySQL"],
        features: [
          "Dynamic admin dashboard",
          "Media uploads",
          "SweetAlert feedback dialogs",
        ],
      },
    ],
    personal_traits: [
      "Adaptable and hardworking",
      "Strong problem-solving skills",
      "Collaborative and eager to learn",
    ],
    fallback_message:
      "I can only talk about my skills, projects, and professional experiences in tech. 😊",
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: input }]);

    try {
      const result = await model.generateContent([
        {
          role: "user",
          parts: [
            { text: `Neil Data: ${JSON.stringify(neilData, null, 2)}` },
            { text: `User question: ${input}` },
          ],
        },
      ]);

      const reply =
        result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
        neilData.fallback_message;

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error fetching response" },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <Button
          className="chatbot-toggle rounded-circle"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "60px",
            height: "60px",
            zIndex: 10000,
            fontSize: "24px",
          }}
          onClick={() => setIsOpen(true)}
        >
          <FaComments />
        </Button>
      )}

      {/* ChatBot Window */}
      {isOpen && (
        <div className="chatbot-container">
            <div className="chatbot-header">
            <FaRobot size={20} style={{ marginRight: "8px" }} />
            NeilBot
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
                ✖
            </button>
            </div>

            <div className="chatbot-messages">
            {/* Always show greeting */}
            <div className="chat-message bot">
                Hi! I’m Neil. Ask me about my projects, skills, or career!
            </div>

            {/* Render user and bot messages */}
            {messages.map((msg, idx) => (
                <div key={idx} className={`chat-message ${msg.role}`}>
                {msg.text}
                </div>
            ))}
            </div>
  {/* Powered by Gemini */}
  <div className="powered-by-container">
    <small className="powered-by">Powered by Gemini</small>
  </div>

        <div className="chatbot-input">
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Neil about his projects or skills..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()} // send on Enter
        />
        <Button
            onClick={handleSend}
            disabled={loading}
            variant="primary"
            className="d-flex align-items-center justify-content-center"
        >
            {loading ? "..." : <FaPaperPlane />}
        </Button>
        </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
