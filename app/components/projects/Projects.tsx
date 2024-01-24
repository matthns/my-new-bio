import Image from "next/image";

type ProjectProps = {
  name: string;
  logo: string;
};

const projectsList: ProjectProps[] = [
  { name: "MMA DEVS", logo: "/assets/img/mmadevs.png" },
  { name: "Digitaxi", logo: "/assets/img/digitaxi.png" },
  { name: "Gestão Empresarial", logo: "/assets/img/gestao.png" },
];

export const Projects = () => {
  return (
    <section>
      <header className="flex flex-col it py-4">
        <h4 className="font-semibold">Projects</h4>
        <hr />
      </header>
      <main>
        <ul className="flex flex-row gap-4 flex-wrap">
          {projectsList.map((x) => (
            <li key={x.name}>
              <Image src={x.logo} width={150} height={150} alt={x.name} />
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};
