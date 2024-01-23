import { MdWork } from "react-icons/md";

type ItemProps = {
  type: string;
  where: string;
  course: string;
  time: string;
};

const experience: ItemProps[] = [
  {
    where: "Cootranspex",
    type: "Full Time",
    course: "IT Assistant",
    time: "8 yrs",
  },
  {
    where: "MMA DEVS",
    type: "Self-employed",
    course: "Front-End Developer",
    time: "4 mts",
  },
  {
    where: "Minsait",
    type: "Full Time",
    course: "Techinician Support Level 2",
    time: "2 mts",
  },
];

export const Experience = () => {
  return (
    <section>
      <header className="flex flex-col it py-4">
        <h4 className="font-semibold">Experience</h4>
        <hr />
      </header>
      <main>
        <ul className="flex flex-col gap-2">
          {experience.map((x) => (
            <div key={x.course} className="flex flex-row gap-2">
              <div className="p-4 text-lg items-center justify-center bg-sky-400 rounded-md">
                <MdWork />
              </div>
              <header>
                <p>
                  {x.where} - {x.time} - {x.type}
                </p>
                <strong>{x.course}</strong>
              </header>
            </div>
          ))}
        </ul>
      </main>
    </section>
  );
};
