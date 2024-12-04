import React, { useState } from 'react';
import '../../styles/ContactForm.css';


const ContactForm = () => {
    const [isOpen, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // Message de statut
  const [isSuccess, setIsSuccess] = useState(null); // Succès ou échec

  // Met à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Gère la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mldezrpq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Votre message a été envoyé avec succès !'); // Message de succès
        setIsSuccess(true);
        setFormData({ email: '', subject: '', message: '' }); // Réinitialise le formulaire
      } else {
        setStatus('Oups, une erreur est survenue. Réessayez plus tard.'); // Message d'erreur
        setIsSuccess(false);
      }
    } catch (error) {
      setStatus('Erreur : Impossible d\'envoyer votre message.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="contact-form-container">
      {/* Message de statut */}
      {status && (
        <div className={`status-message ${isSuccess ? 'success' : 'error'}`}>
          {status}
        </div>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="glass-label">
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            id="email"
            name="email"
            className="glass-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="glass-label">
            <label htmlFor="subject">Objet</label>
          </div>
          <input
            type="text"
            id="subject"
            name="subject"
            className="glass-input"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <div className="glass-label">
            <label htmlFor="message">Message</label>
          </div>
          <textarea
            id="message"
            name="message"
            className="glass-input glass-textarea"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="glass-button">
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;