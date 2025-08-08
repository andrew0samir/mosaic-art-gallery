import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Remeber to change this with the key
    formData.append("access_key", "1f0c2fc9-a1cb-41e6-98ae-435b0b18e5eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      console.log("Success", res);
      Swal.fire({
        title: "Thanks!",
        text: "Your message sent successfully",
        icon: "success",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-sky-500 via-cyan-500 to-blue-500 py-30 px-4">
      <Helmet>
        <title>Mosaic Art Gallery - Contact Us</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            {/* Contact Me */}
            تواصل معنا
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {/* Get in touch to discuss commissions, collaborations, or just to say
            hello. */}
            تواصل معنا لطلب قطعتك الفنية الخاصة
          </p>
        </div>

        {/* Contact Grid */}
        <div className="flex sm:flex-row flex-col justify-center items-center max-w-5xl mx-auto gap-6 ">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg text-gray-800 placeholder-gray-600 ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg text-gray-800 placeholder-gray-600 ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-800 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg text-gray-800 placeholder-gray-600 ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-white bg-opacity-20 rounded-lg text-gray-800 placeholder-gray-600 ring-1 ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 bg-opacity-80 rounded-lg text-white hover:bg-opacity-100 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          {/* <div className="space-y-6 w-full text-start">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 hover:bg-opacity-20 transition duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
                للتواصل معنا
              </h2>
              <div className="space-y-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Email : </span>
                  artist@example.com
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Phone : </span> (+2)
                  01225100636
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Studio : </span> 123 Art
                  Street, Creative District
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 hover:bg-opacity-20 transition duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Studio Hours
              </h2>
              <div className="space-y-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Monday - Friday:</span> 9:00
                  AM - 6:00 PM
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Saturday:</span> By
                  Appointment
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
