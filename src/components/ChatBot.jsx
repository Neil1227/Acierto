import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaComments, FaPaperPlane, FaRobot } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever messages or loading changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // ✅ Gemini setup (with Vite env)
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

 const neilData = {
    system_instruction:
      "You are Neil Acierto. Speak in first person as Neil. Only answer about web development, programming, IT support, and your career journey. Redirect politely if asked about unrelated personal topics. Make it Short but straight to the point",
    personal_info: {
      name: "Neil Patrick Acierto",
      title: "Full-Stack Developer & IT Support",
      location: "Magalang, Pampanga, Philippines",
      email: "neilpatrickacierto27@gmail.com",
      phone: "+63 920-475-6753",
    },
    professional_summary:
      "I am a motivated Web Developer and IT Support professional with hands-on experience in troubleshooting, building responsive websites, and managing databases.",
    skillset: {
      languages_frameworks: [
        "PHP (specialty: Laravel)",
        "Laravel (primary framework)",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap",
      ],
      databases: ["MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Postman"],
      extra: ["IT Support - hardware/software troubleshooting"],
    },

    career_journey: [
      { year: "2025", role: "Full-Stack Developer", company: "Pampanga State Agricultural University" },
      { year: "2025", role: "Hardware Technical Support", company: "Superl Philippines" },
      { year: "2022", role: "OJT - IT Support", company: "Hausland Group" },
      { year: "2019-2022", role: "Service Crew", company: "McDonald's Magalang" },
    ],
    projects: [
      {
        name: "Portfolio Website",
        stack: ["React", "CSS Modules"],
        features: ["Responsive design", "Interactive sections", "Contact form"],
        impact: "Main showcase for my skills and projects.",
      },
      {
        name: "Knowledge Management Unit Laravel Website",
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

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const result = await model.generateContent([
        `Neil Data: ${JSON.stringify(neilData)}`,
        `User question: ${input}`,
      ]);

      const reply = result.response.text() || neilData.fallback_message;

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error("Gemini API Error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: neilData.fallback_message },
      ]);
    } finally {
      setLoading(false);
    }
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
        {/* Header */}
        <div className="chatbot-header">
          <FaRobot size={20} style={{ marginRight: "8px" }} />
          NeilBot
          <button
            className="chatbot-close-btn"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {/* Initial bot greeting */}
          <div className="chat-message bot">
            Hi! I’m Neil. Ask me about my projects, skills, or career!
          </div>

          {/* User & bot messages */}
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              {msg.text}
            </div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <div className="chat-message bot typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {/* Ref for auto-scroll */}
          <div ref={messagesEndRef} />
        </div>

        {/* Powered By */}
        <div className="powered-by-container">
          <small className="powered-by">Powered by Gemini</small>
        </div>

        {/* Input Box */}
        <div className="chatbot-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Neil about his projects or skills..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <Button
            onClick={handleSend}
            disabled={loading}
            variant="primary"
            className={`d-flex align-items-center justify-content-center ${
              loading ? "loading" : ""
            }`}
          >
            {loading ? (
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <FaPaperPlane />
            )}
          </Button>
        </div>
      </div>

      )}
    </>
  );
};

export default ChatBot;
