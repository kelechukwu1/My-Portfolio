import Link from "next/link";
const Footer = () => {
	return (
		<div className="md:flex md:justify-between px-4 md:mt-10 md:px-20 py-8 space-y-3 lg:space-y-0">
			<div className="lg:flex text-center justify-center md:mb-0">
				<div className="lg:hidden">Designed & Developed by </div>
				<div className="lg:hidden"> Kelechukwu Ikechukwu</div>
				<div className="hidden lg:block">
					{" "}
					Designed & Developed by Kelechukwu Ikechukwu
				</div>
			</div>
			<div className="flex justify-center text-center md:space-x-5">
				<div className="hover:border-b border-b-white mx-2 md:md:mx-0">
					<Link
						href="/"
						className="inline-block text-text-main fluid-4xl hover:-translate-y-1 transition duration-300"
					>
						Twitter
					</Link>
				</div>

				<div className="hover:border-b border-b-white mx-2 md:md:mx-0">
					<Link
						href="/"
						className="inline-block text-text-main fluid-4xl hover:-translate-y-1 transition duration-300"
					>
						LinkedIn
					</Link>
				</div>
				<div className="hover:border-b border-b-white mx-2 md:md:mx-0">
					<Link
						href="/"
						className="inline-block text-text-main fluid-4xl hover:-translate-y-1 transition duration-300"
					>
						Github
					</Link>
				</div>
				<div className="hover:border-b border-b-white mx-2 md:md:mx-0">
					<Link
						href="/"
						className="inline-block text-text-main fluid-4xl hover:-translate-y-1 transition duration-300"
					>
						WhatsApp
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
