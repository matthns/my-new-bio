import { ElementType } from "react";
import { FaDatabase, FaJava } from "react-icons/fa";
import { MdJavascript, MdWork } from "react-icons/md";
import {
  SiCss3,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type ItemProps = {
  title: string;
  time: string;
  Icon: ElementType;
};

const stack: ItemProps[] = [
  { title: "Javascript", time: "+ 1 yrs", Icon: SiJavascript },
  { title: "Typescript", time: "1 yrs", Icon: SiTypescript },
  { title: "Java", time: "< 1 yrs", Icon: FaJava },
  { title: "HTML5", time: "+ 2 yrs", Icon: SiHtml5 },
  { title: "CSS3", time: "+ 2 yrs", Icon: SiCss3 },
  { title: "TailwindCSS", time: "1 yrs", Icon: SiTailwindcss },
  { title: "Styled-components", time: "1 yrs", Icon: SiStyledcomponents },
  { title: "React.js", time: "1 yrs", Icon: SiReact },
  { title: "Next.js", time: "1 yrs", Icon: SiNextdotjs },
  { title: "Databases", time: "1 yrs", Icon: FaDatabase },
  { title: "Figma", time: "+ 1 yrs", Icon: SiFigma },
  { title: "Git", time: "1 yrs", Icon: SiGit },
];

export const Stack = () => {
  return (
    <section>
      <header className="flex flex-col it py-4">
        <h4 className="font-semibold">Stack</h4>
        <hr />
      </header>
      <main>
        <ul className="grid grid-cols-5 gap-4">
          {stack.map((x) => (
            <div key={x.title} className="text-4xl">
              <x.Icon />
            </div>
          ))}
        </ul>
      </main>
    </section>
  );
};
