import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Contoh penggunaan Formspree
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitMessage('Pesan Anda telah dikirim!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.');
      }
    } catch (error) {
      setSubmitMessage('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-6">
            <h1 className='text-5xl'>Let's Talk</h1>
            <div className="flex w-sm flex-col gap-3">
              <p>If you're interested in working together, please fill out this super quick form and tell me about your project scope/deliverables, timeline, and budget! The more detailed the better.</p>
              <p>I specialize in branding D2C companies primarily for Gen Z/Millenials, but am also open to other projects such as merch design, book cover design (please), editorial posters, and more! If you just want to say hi, that's totally welcome too.</p>
              <p>I do my best to get back to everyone but due to volume of inquiries I prioritize responding to projects that I feel are a good fit!</p>
            </div>
          </div>
          {submitMessage && (
            <div className={`p-4 mb-4 rounded ${submitMessage.includes('dikirim') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitMessage}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">your cool name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-gray-100  rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">your lovely email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">why do you want to work together ?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border bg-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[100px] bg-[#000] text-white py-3 rounded-sm hover:bg-blue-700 transition duration-300 disabled:bg-blue-400"
            >
              {isSubmitting ? 'sending...' : 'send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;