"use client";
import { useRef, useState } from "react";
import React from "react";
// import { useRouter } from "next/router";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TwLink from "./tw-link/TwLink";
import PrimaryButton from "./PrimaryButton";

const MySwal = withReactContent(Swal);

const inputClass = `
      peer 
      w-full 
      border-b
      bg-black/0 
      pr-2 pb-2  
      text-2xl 
      outline-none 
      duration-300 
      border-muted-secondary/30
      text-text-main  
      focus-within:border-white
      resize-none
      `;

const spanLabelClass = `
      absolute
      -top-7
      left-0
      text-lg
      duration-300
      text-muted-secondary
      peer-placeholder-shown:top-0
      peer-placeholder-shown:text-2xl
      peer-placeholder-shown:text-white
      peer-focus-within:-top-7
      peer-focus-within:text-lg
      peer-focus-within:text-muted-secondary
      `;

const ContactForm = () => {
	// const router = useRouter();

	const formRef = useRef(null);
	const [isSending, setIsSending] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	const submitForm = async (e) => {
		e.preventDefault();

		setErrorMsg("");
		setIsSending(true);

		const name = e.target[0].value;
		const email = e.target[1].value;
		const subject = e.target[2].value;
		const message = e.target[3].value;

		try {
			await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					subject: subject,
					message: message,
				}),
			});

			setIsSending(false);
			formRef?.current?.reset();
			MySwal.fire({
				background: "#222",
				color: "#fff",
				title: <strong>Message Sent!</strong>,
				html: <p>I will get back to you soon.</p>,
				confirmButtonText: "Close",
				confirmButtonColor: "#1f7dcf",
				icon: "success",
			});
		} catch (e) {
			setIsSending(false);
			setErrorMsg(e.message);
			MySwal.fire({
				background: "#222",
				color: "#fff",
				title: <strong>Message could not be sent.</strong>,
				html: (
					<p>
						Please try again or send me an email directly at:{" "}
						<TwLink
							className="text-lg"
							href="mailto:obiefunakelechukwu@gmail.com"
						>
							obiefunakelechukwu@gmail.com
						</TwLink>
					</p>
				),
				confirmButtonText: "Close",
				confirmButtonColor: "#1f7dcf",
				icon: "error",
			});
		}
	};

	return (
		<form
			ref={formRef}
			onSubmit={submitForm}
			className="flex flex-col gap-12 pt-16 md:pt-0"
		>
			<label htmlFor="name" className="relative text-text-main">
				<input
					type="text"
					id="name"
					placeholder=""
					required
					className={inputClass}
				/>
				<span className={spanLabelClass}>Name</span>
			</label>
			<label htmlFor="email" className="relative text-text-main">
				<input
					type="text"
					id="email"
					placeholder=" "
					required
					className={inputClass}
				/>
				<span className={spanLabelClass}>Email</span>
			</label>
			<label htmlFor="subject" className="relative text-text-main">
				<input
					type="text"
					id="subject"
					placeholder=" "
					required
					className={inputClass}
				/>
				<span className={spanLabelClass}>Subject</span>
			</label>
			<label htmlFor="message" className="relative text-text-main">
				<textarea
					id="message"
					required
					rows={4}
					placeholder=" "
					cols={33}
					className={inputClass}
				/>
				<span className={spanLabelClass}>Message</span>
			</label>
			<PrimaryButton
				btnType="submit"
				name={"Send Message"}
				type={isSending ? "loading" : "solid"}
				className="mx-auto  md:mx-0 md:ml-auto"
			/>
		</form>
	);
};

export default ContactForm;
