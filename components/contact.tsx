"use client";

import React from "react";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/submitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      aria-label="Contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >

      <p className="leading-normal text-xs text-gray-700 dark:text-white/70">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ahir.ankur0429@gmail.com">
          ahir.ankur0429@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-2 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:text-white dark:bg-white/10 dark:hover:bg-white/20 bg-gray-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="resize-none h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white bg-gray-100 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}