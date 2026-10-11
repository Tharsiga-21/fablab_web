// Contact section displaying LICET FabLab address, email, phone numbers from config/site.js, and a client-side validated inquiry form.

import { useState } from 'react';
import { MapPin, Mail, Phone, UserCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { site } from '../config/site';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: 'Campus Address',
      value: site.address,
    },
    {
      icon: Mail,
      label: 'Official Email',
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: Phone,
      label: 'Office Phone',
      value: site.phone,
      href: `tel:${site.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: UserCheck,
      label: 'Admissions',
      value: site.admissions,
      href: `tel:${site.admissions}`,
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F4F7FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact the LICET FabLab"
          subtitle="Have questions about machine availability, filament specifications, or workshop scheduling? Reach out to our team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            {contactItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.label} className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4169E1]/10 text-[#4169E1]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#1A1F36]/60">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm sm:text-base font-bold text-[#1A1F36] hover:text-[#4169E1] transition-colors mt-0.5 inline-block tabular-nums"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base font-bold text-[#1A1F36] mt-0.5 leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right Column: Client-Side Validated Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#1A1F36] mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#1A1F36]/70 mb-6">
                Fill out the form below for general inquiries or clarification on
                FabLab resource requests.
              </p>

              {submitted ? (
                <div
                  role="status"
                  className="rounded-2xl bg-[#F4F7FF] border border-[#4169E1]/25 p-6 text-center space-y-4"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FF8C00]/15 text-[#FF8C00]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#1A1F36]">
                      Message Validated & Received
                    </h4>
                    <p className="text-sm text-[#1A1F36]/75 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>.
                      Your inquiry has been noted. For immediate booking, please
                      use our official Google Forms in the Services section.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button variant="secondary" onClick={handleReset}>
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#1A1F36] mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Arjun Krishnan"
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#1A1F36] placeholder:text-[#1A1F36]/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-[#4169E1]/25 focus:border-[#4169E1] focus:ring-[#4169E1]/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#1A1F36] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@licet.ac.in"
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#1A1F36] placeholder:text-[#1A1F36]/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-[#4169E1]/25 focus:border-[#4169E1] focus:ring-[#4169E1]/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#1A1F36] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, print material question, or workshop inquiry..."
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#1A1F36] placeholder:text-[#1A1F36]/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-200'
                          : 'border-[#4169E1]/25 focus:border-[#4169E1] focus:ring-[#4169E1]/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <Button type="submit" variant="primary">
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
