import { Resend } from "resend";
import { EmailTemplate } from "../../components/email/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, subject, message } = JSON.parse(req.body);

    const data = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: `Portfolio - ${name} t'a contacté à partir du formulaire de ton portfolio!`,
      html: "",
      react: EmailTemplate({ name, email, subject, message }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
