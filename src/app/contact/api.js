import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_ADDRESS,
		pass: process.env.EMAIL_PASSWORD,
	},
});

export default sendEmail = async (req, res) => {
	const { name, email, message, subject } = req.body;

	const mailOptions = {
		from: email,
		to: process.env.EMAIL_ADDRESS,
		subject: `Message From ${name}`,
		html: `
    <p>Name: ${name} </p>
    <p>Email: ${email} </p>
    <p>Subject: ${subject} </p>
    <p>Message: ${message} </p>`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "email sent successfully" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
	return <div>api route</div>;
};
