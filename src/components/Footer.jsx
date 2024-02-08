import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterXLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Footer = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <RiTwitterXLine className="w-7 md:w-8 h-7 md:h-8" />,
      url: "https://twitter.com/kelechukwu_1",
    },
    {
      name: "LinkedIn",
      icon: <RiLinkedinLine className="w-7 md:w-8 h-7 md:h-8" />,
      url: "https://linkedin.com/in/kelechukwu-ikechukwu-9b7615225",
    },
    {
      name: "Github",
      icon: <RiGithubLine className="w-7 md:w-8 h-7 md:h-8" />,
      url: "https://github.com/kelechukwu1",
    },
    {
      name: "WhatsApp",
      icon: <RiWhatsappLine className="w-7 md:w-8 h-7 md:h-8" />,
      url: "whatsapp://send?text=Hello Kelechukwu, I'm reaching out from your portfolio website&phone=+2349063646331",
    },
  ];
  return (
    <div className="md:flex md:justify-between md:mt-10 py-8 space-y-14 md:space-y-0">
      <div className="lg:flex text-center text-muted-main fluid-lg justify-center md:mb-0">
        <div className="lg:hidden">Designed & Developed by </div>
        <div className="lg:hidden"> Kelechukwu Ikechukwu</div>
        <div className="hidden lg:block">
          {" "}
          Designed & Developed by Kelechukwu Ikechukwu
        </div>
      </div>
      <div className="flex justify-center text-center md:space-x-5 md:mt-0">
        {socials.map((item, index) => (
          <div
            key={index}
            className="hover:border-b hover:text-blue-500 border-b-white mx-2 md:md:mx-0"
          >
            <Link
              href={item.url}
              className="inline-block text-text-main fluid-4xl hover:-translate-y-1 transition duration-300"
            >
              <div className="flex justify-center">{item.icon}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
