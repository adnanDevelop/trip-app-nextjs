const { z } = require("zod");

const formValidation = z.object({
  userName: z.string({ required_error: "Username is required" }).trim(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  subject: z.string({ required_error: "subject is required" }).trim(),
  message: z.string({ required_error: "Message is required" }).trim(),
});

module.exports = formValidation;
