import Link from "next/link";
const Footer = () => {
	return (
		<div className="md:flex md:justify-between px-4 md:px-20 py-8">
			<div className="text-center justify-center mb-3 md:mb-0">
				Designed & Developed by Kelechukwu Ikechukwu
			</div>
			<div className="flex justify-center text-center md:grid md:grid-cols-4 md:gap-2">
				<div className="mx-2 md:md:mx-0">
					<Link
						href="/"
						className=" hover:border-b border-b-white transition ease-in-out duration-500"
					>
						X
					</Link>
				</div>

				<div className="mx-2 md:md:mx-0">
					<Link
						href="/"
						className=" hover:border-b border-b-white transition ease-in-out duration-500"
					>
						LinkedIn
					</Link>
				</div>
				<div className="mx-2 md:md:mx-0">
					<Link
						href="/"
						className=" hover:border-b border-b-white transition ease-in-out duration-500"
					>
						Github
					</Link>
				</div>
				<div className="mx-2 md:md:mx-0">
					<Link
						href="/"
						className=" hover:border-b border-b-white transition ease-in-out duration-500"
					>
						WhatsApp
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
