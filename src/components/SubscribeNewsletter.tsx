import { useState } from "react";

export default function SubscribeNewsletter({ className }: { className?: string }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");

  const submit = () => {
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Here you would typically send the email to your backend or a service like Mailchimp
    location.href = "https://docs.google.com/forms/d/e/1FAIpQLScmxpm-bPYWSCGze9ZIhZXgJDOJotdGAYwKlN261JxokKwK2A/viewform?usp=pp_url&entry.1198173399=" + encodeURIComponent(email);
  }

  return (
    <div className={`flex ${className}`}>
      <input type="email" placeholder="Your email address" className="border-2 border-white flex-grow rounded-l-full px-6 py-3 text-white outline-none" value={email} onChange={(e) => {
        setEmail(e.target.value);
      }} onKeyDown={(e) => {
        if (e.key === "Enter") submit();
      }} />
      <button className="bg-white text-[#d3910a] rounded-r-full px-6 py-3 font-semibold cursor-pointer transition" onClick={submit}>Subscribe</button>
    </div>
  )
}