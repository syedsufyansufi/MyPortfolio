import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <strong>Email:</strong>
          <a href="mailto:syedsufyan787@gmail.com">syedsufyan787@gmail.com</a>
        </div>
        <div className={styles.infoItem}>
          <strong>Phone:</strong>
          <a href="tel:+917057711197">+91 7057711197</a>
        </div>
        <div className={styles.infoItem}>
          <strong>Location:</strong>
          <span>Pune, Maharashtra, India</span>
        </div>
      </div>
      <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
