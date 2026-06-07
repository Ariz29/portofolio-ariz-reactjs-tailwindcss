import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { ABOUT_ME } from "../utils/data"
import { IoMdMail } from "react-icons/io"
import { IoPhonePortrait } from "react-icons/io5"
import { MdOutlineWeb } from "react-icons/md"
import ContactInfoCard from "../components/ContactInfoCard"

const ContactMe = () => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  
  // State form menggunakan nama field bawaan default template EmailJS bray
  const [formData, setFormData] = useState({
    from_name: "",  // Menampung nama lengkap
    reply_to: "",   // Menampung email pengirim
    message: ""     // Menampung isi pesan
  });

  // Fungsi handle perubahan input otomatis + auto-kapital di awal kata
  const handleChange = (e) => {
    let value = e.target.value;

    // Aturan khusus: Jika inputan adalah from_name (Full Name), ubah huruf pertama tiap kata jadi kapital
    if (e.target.name === "from_name") {
      value = value.replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
    }

    setFormData({ 
      ...formData, 
      [e.target.name]: value 
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");
    
    const SERVICE_ID = "service_f0nqo68";   
    const TEMPLATE_ID = "template_8k8f1hv"; 
    const PUBLIC_KEY = "lrNEq94JLrksuqROJ";

    // Langsung kirim objek formData yang key-nya sudah sinkron (from_name, reply_to, message)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {
      publicKey: PUBLIC_KEY
    })
    .then(
      () => {
        setIsSending(false);
        setStatusMessage("Success! Your message has been sent.");
        setFormData({ from_name: "", reply_to: "", message: "" }); // Reset form
      },
      (error) => {
        setIsSending(false);
        setStatusMessage("Failed to send the message. Please try again.");
        console.error("EmailJS Error Detail:", error);
      }
    );
  };

  return (
    <section id="contact" className="bg-transparent max-w-5xl mx-auto">
      <div className="container mx-auto p-10">
        
        {/* Section Title & Description */}
        <div className="w-full lg:w-[60vw] mx-auto text-center flex flex-col items-center">
          <h4 className="section-title text-slate-900 dark:text-white transition-colors duration-300">
            Contact Me
          </h4>
          
          <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-2 mb-4"></div>
          
          <p className="text-sm mt-4 mb-8 text-slate-600 dark:text-slate-300 transition-colors duration-300 leading-6">
            If you are interested in collaborating or would like to discuss potential opportunities, please feel free to reach out using the contact information below or by filling out the contact form. I am always open to new ventures and look forward to connecting with like-minded professionals!
          </p>
        </div>

        {/* Main Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col gap-4">
            <ContactInfoCard
              icon={<IoMdMail />}
              text={ABOUT_ME.email}
            />
            <ContactInfoCard
              icon={<IoPhonePortrait />}
              text={ABOUT_ME.phone}
            />
            <ContactInfoCard
              icon={<MdOutlineWeb />}
              text={ABOUT_ME.website}
            />
          </div>

          {/* Right Side: Contact Form */}
          <div>
            <h5 className="md:hidden text-secondary dark:text-slate-200 text-lg font-medium mt-4 pb-5 transition-colors duration-300">
              Contact Form
            </h5>
            
            <form onSubmit={sendEmail} className="flex flex-col gap-4">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Full Name"
                className="input-box bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-[#fee6cc] dark:border-slate-700 p-3 rounded-xl outline-none transition-colors duration-300 capitalize"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                placeholder="Email Address"
                className="input-box bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-[#fee6cc] dark:border-slate-700 p-3 rounded-xl outline-none transition-colors duration-300"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="input-box bg-white/50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-[#fee6cc] dark:border-slate-700 p-3 rounded-xl outline-none resize-none transition-colors duration-300"
                autoComplete="off"
                required
              />
              
              {/* Status Notification */}
              {statusMessage && (
                <p className={`text-xs font-mono ${statusMessage.startsWith("Success") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                  {statusMessage}
                </p>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSending}
                className="action-btn btn-scale-anim bg-orange-500 text-white py-3 px-6 rounded-xl font-medium text-sm shadow-md hover:scale-[1.02] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactMe