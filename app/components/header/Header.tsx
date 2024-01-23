import Image from "next/image";
import { ElementType } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

type ContactsProps = {
  title: string;
  Icon: ElementType;
  href: string;
};

const contacts: ContactsProps[] = [
  {
    title: "Linkedin",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/matthns/",
  },
  { title: "Github", Icon: FaGithub, href: "https://github.com/matthns" },
  { title: "E-mail", Icon: SiGmail, href: "mailto:matthns98@gmail.com" },
];

export const Header = () => {
  return (
    <section className="">
      <main className="flex flex-col items-center">
        <Image
          src={`/assets/img/profile.png`}
          width={150}
          height={150}
          alt="Profile photo"
        />
        <p className="py-3 text-xl">
          Hi, i&apos;m <strong>Matheus Nascimento</strong>
        </p>
        <ul className="flex flex-row gap-6">
          {contacts.map((x) => (
            <li
              key={x.title}
              className="text-3xl cursor-pointer transition ease-in-out delay-150 duration-300 hover:text-sky-400 hover:-translate-y-1 hover:scale-110"
            >
              <x.Icon />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};
