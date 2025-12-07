'use client'
import { Card } from "@/src/components/Card";
import { SectionHeader } from "@/src/components/SectionHeader";
import { useCallback, useEffect, useRef, useState } from "react";

export const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [verified, setVerified] = useState(false);

  const handleVerify = useCallback(() => {
    setVerified(true);
  }, []);

  const handleError = useCallback(() => {
    setVerified(false);
  }, []);

  useEffect(() => {
    const turnstile = (window as any).turnstile;
    const widgetId = turnstile.render(ref.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      callback: handleVerify,
      "error-callback": handleError,
    });
    return () => turnstile.remove(widgetId);
    }, [handleError, handleVerify]);

  return (
    <section className="pt-20 lg:py-28" id="contact">
      <div className="container">
        <SectionHeader eyebrow="Get in Touch" title="Contact Me" />
        <Card className="p-8 md:px-10 md:py-12 lg:px-20 lg:py-16 mt-10 md:mt-20">
          <form action="" className="flex flex-col gap-4 text-sm md:text-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" className="h-9 rounded-md bg-zinc-900 px-3" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="font-semibold">Email</label>
                <input type="email" id="email" name="email" required placeholder="your.email@example.com" className="h-9 rounded-md bg-zinc-900 px-3" />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-semibold">Message</label>
              <textarea name="message" id="message" required rows={4} placeholder="What would you like to discuss?" className="rounded-md bg-zinc-900 px-3 py-2"></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 items-center gap-2">
              <div className="flex md:justify-end md:order-last">
                <div ref={ref}></div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <input type="checkbox" name="privacy-policy" id="privacy-policy" />
                  <label htmlFor="privacy-policy" className="ml-2 text-xs">I agree to the processing of my personal data in accordance with the <a href="/privacy-policy" className="underline">privacy policy</a>.</label>
                </div>
                <button type="submit" className="btn-dark w-full md:w-2/3" disabled={!verified}>Submit</button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
};
