import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { toast } from '../ui/use-toast';

const contactFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please enter your email address.',
    })
    .email(),
  subject: z.string({
    required_error: 'Please enter a subject.',
  }),
  message: z.string({
    required_error: 'Please enter a message.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: ContactFormValues = {
  username: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: ContactFormValues) {
    emailjs.init(import.meta.env.PUBLIC_EMAIL_PUBLIC_KEY);
    emailjs
      .send(
        import.meta.env.PUBLIC_EMAIL_SERVICE_ID,
        import.meta.env.PUBLIC_EMAIL_TEMPLATE_ID,
        data,
      )
      .then(() => {
        toast({
          description: ' Message sent successfully ✅',
        });
        form.reset();
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          description: 'Message not sent (service error) ❌',
        });
      });
  }

  return (
    <div className="contact__mail">
      <h2 className="contact__title">Send Me A Message</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="contact__form"
          id="contact-form"
        >
          <div className="contact__group">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="contact__box">
                  <FormControl>
                    <input
                      className="contact__input"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="contact__label">First Name</FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="contact__box">
                  <FormControl>
                    <input
                      className="contact__input"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="contact__label">
                    Email Address
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="contact__box">
                <FormControl>
                  <input
                    className="contact__input"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>
                <FormLabel className="contact__label">Subject</FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="contact__box contact__area">
                <FormControl>
                  <textarea
                    className="contact__input"
                    placeholder="Message"
                    {...field}
                  ></textarea>
                </FormControl>
                <FormLabel className="contact__label">Message</FormLabel>
              </FormItem>
            )}
          />

          <p
            className="contact__message text-red-500 dark:text-red-900"
            id="contact-message"
          >
            {
              Object.values(form.formState.errors).find(
                (error) => error && error.message,
              )?.message
            }
          </p>
          <button type="submit" className="contact__button button">
            <Send /> Sned Message
          </button>
        </form>
      </Form>
    </div>
  );
}
