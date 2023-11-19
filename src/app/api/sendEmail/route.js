import nodemailer from "nodemailer";
import * as yup from "yup";

export async function POST(req) {
	if (req.method === "POST") {
		try {
			const { name, email, message, subject } = await req.json();

			// Define a schema for input validation using yup
			const schema = yup.object({
				name: yup
					.string()
					.min(4)
					.required("Name is required and must not be less than 4 char"),
				email: yup
					.string()
					.email("Invalid email")
					.required("Email is required"),
				message: yup.string().required("Message is required"),
				subject: yup.string().required("Subject is required"),
			});

			// Validate input against the schema
			await schema.validate(
				{ name, email, message, subject },
				{ abortEarly: false }
			);

			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
					pass: process.env.NEXT_PUBLIC_EMAIL2FA_PASSWORD,
				},
			});

			const mailOptions = {
				from: email,
				to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
				subject: `Message From ${name}`,
				html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Subject: ${subject} </p>
        <p>Message: ${message} </p>`,
			};

			await transporter.sendMail(mailOptions);

			return new Response(
				JSON.stringify({ message: "email sent successfully" }),
				{ status: 200 }
			);
		} catch (err) {
			console.error("Error:", err.message);
			if (err instanceof yup.ValidationError) {
				// Handle yup validation errors
				const errorMessages = err.errors.join(", ");
				return new Response(JSON.stringify({ message: `${errorMessages}` }), {
					status: 400,
					headers: { "content-type": "application/json" },
				});
			} else {
				// console.error("Error sending email:", err);
				return new Response(
					JSON.stringify({ message: "Failed to send email" }),
					{ status: 500 }
				);
			}
			console.log(err.message);
		}
	} else {
		return new Response(JSON.stringify({ mesage: "Method not allowed" }), {
			status: 405,
		});
	}
}

// Email sanitization
// const sanitizedEmail = sanitizeEmail(email);

// Email sanitization function
// function sanitizeEmail(email) {
//   return email.replace(/[^\w.@-]/g, ""); // Replace characters not allowed in emails
// }
