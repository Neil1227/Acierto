import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css";
import aboutStyles from "../styles/About.module.css";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xkgvppwa"); // <-- replace with your Formspree ID

  return (
    <div id="contact" className={styles.contactPage}>
      <div className={styles.contactContainer}>
        {/* Form Section */}
        <div className={styles.contactForm}>
          <h3 className={`${aboutStyles.gradientText} mb-2`}>Send me a Message</h3>
          <p>Fill out the form below and I’ll get back to you as soon as possible.</p>

          {state.succeeded ? (
            <p className={styles.successMsg}> Thanks! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
              />

              <textarea
                name="message"
                placeholder="Tell me your thoughts or just say hi!"
                rows="5"
                required
              />

              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>
                <Send size={18} /> {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Section */}
        <div className={styles.contactInfo}>
          <div className={styles.infoBox}>
            <h3 className={aboutStyles.gradientText}>Contact Information</h3>
            <p>Feel free to reach out through any of these channels.</p>
            <div className={styles.infoItem}>
              <Mail size={20} />
              <span>neilpatrickacierto@gmail.com</span>
            </div>
            <div className={styles.infoItem}>
              <Phone size={20} />
              <span>+63 920-475-6753</span>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={20} />
              <span>San Pablo Magalang, Pampanga</span>
            </div>
          </div>

          <div className={styles.infoBox}>
            <h3 className={aboutStyles.gradientText}>Follow Me</h3>
            <p>Connect with me on social media for updates and insights.</p>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-telegram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
