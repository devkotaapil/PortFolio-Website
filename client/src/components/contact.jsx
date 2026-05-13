import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  // State to manage button loading status
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true); // Start loading

    try {
      // Logic: Use the ENV variable if it exists (local dev), 
      // otherwise default to '/api/send' (Vercel production)
      const apiUrl = import.meta.env.VITE_SERVER_URI || '/api/send';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Sent as a direct object rather than nested under 'text' for easier backend access
        body: JSON.stringify(formData) 
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', description: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    }
    catch (error) {
      console.error(`Error sending message:`, error);
      alert('An error occurred. Check the console for details.');
    } finally {
      setIsSending(false); // Stop loading regardless of success/fail
    }
  }

  return (
    <div className="mx-auto my-10 rounded-xl bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold leading-none tracking-tight text-center">
          Contact Me
        </h3>
        <p className="text-sm text-muted-foreground text-center">
          Send a message and I'll get back to you.
        </p>
      </div>

      <form className="p-4 sm:p-6 sm:pt-0 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Name</label>
          <input
            name="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Email</label>
          <input
            name="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none">Message</label>
          <textarea
            name="description"
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors h-10 py-2 px-4 ${
            isSending ? "bg-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-black/90"
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;