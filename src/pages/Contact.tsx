
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="pt-20 md:pt-28 pb-20">
      {/* Header */}
      <div className="container mx-auto container-padding mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our products, 
            need assistance with an order, or want to collaborate, our team is here to help.
          </p>
        </div>
      </div>
      
      {/* Contact Information & Form */}
      <div className="container mx-auto container-padding mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              
              <ContactInfo 
                icon={<Mail />}
                title="Email Us"
                content="contact@engadaspot.com"
                href="mailto:contact@engadaspot.com"
              />
              
              <ContactInfo 
                icon={<Phone />}
                title="Call Us"
                content="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              
              <ContactInfo 
                icon={<MapPin />}
                title="Visit Us"
                content="No 106 Jaffna Road, Manipay 40000"
                href="https://maps.google.com/maps?q=Engada+SPOT,+No+106+Jaffna+Road,+Manipay+40000"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Store Hours</h2>
              <div className="space-y-2">
                <BusinessHours day="Monday - Friday" hours="10:00 AM - 7:00 PM" />
                <BusinessHours day="Saturday" hours="11:00 AM - 6:00 PM" />
                <BusinessHours day="Sunday" hours="Closed" />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="glassmorphism p-6 md:p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending</span>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-80 md:h-96 bg-muted relative overflow-hidden">
        <iframe
          title="Engada SPOT Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.0639431468986!2d79.99553987369043!3d9.724612879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe55284f5549fd%3A0xf7acf784d61c10ef!2sEngada%20SPOT!5e0!3m2!1sen!2sus!4v1699012345678!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, href }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {content}
        </a>
      </div>
    </div>
  );
};

interface BusinessHoursProps {
  day: string;
  hours: string;
}

const BusinessHours: React.FC<BusinessHoursProps> = ({ day, hours }) => {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{day}</span>
      <span className="font-medium">{hours}</span>
    </div>
  );
};

export default Contact;
