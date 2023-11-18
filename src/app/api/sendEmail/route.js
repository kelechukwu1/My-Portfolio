import nodemailer from "nodemailer";

export async function POST(req) {
	if (req.method === "POST") {
		try {
			const { name, email, message, subject } = await req.json();
			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
					pass: process.env.NEXT_PUBLIC_EMAIL2FA_PASSWORD,
				},
			});

			const mailOptions = {
				from: email,
				to: "obiefunakelechukwu@gmail.com",
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
			console.error("Error sending email:", err);
			return new Response(
				JSON.stringify({ mesage: "failed to send Email now oo" }),
				{
					status: 500,
				}
			);
		}
	} else {
		return new Response(JSON.stringify({ mesage: "Method not allowed" }), {
			status: 405,
		});
	}
}
