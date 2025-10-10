import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string()
    .trim()
    .regex(/^[\d\s\-\+\(\)]+$/, { message: "Please enter a valid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .optional()
    .or(z.literal("")),
  message: z.string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Prepare WhatsApp message with proper encoding
      const message = encodeURIComponent(
        `New Contact Form Submission\n\n` +
        `Name: ${validatedData.name}\n` +
        `Email: ${validatedData.email}\n` +
        `Phone: ${validatedData.phone || 'Not provided'}\n\n` +
        `Message:\n${validatedData.message}`
      );

      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/254742043021?text=${message}`;
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      toast({
        title: "Message sent!",
        description: "Opening WhatsApp to complete your message. We'll respond within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Set validation errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);

        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-destructive" : ""}
          required
          maxLength={100}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-destructive" : ""}
          required
          maxLength={255}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+254 7XX XXX XXX"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "border-destructive" : ""}
          maxLength={20}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about what brings you here today..."
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-destructive" : ""}
          required
          rows={6}
          maxLength={1000}
        />
        <div className="flex justify-between items-center">
          {errors.message ? (
            <p className="text-sm text-destructive">{errors.message}</p>
          ) : (
            <p className="text-xs text-muted-foreground">
              {formData.message.length}/1000 characters
            </p>
          )}
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        variant="gradient"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message via WhatsApp
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to be contacted via WhatsApp or email.
      </p>
    </form>
  );
};

export default ContactForm;
