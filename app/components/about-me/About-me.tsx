import { FaStar } from "react-icons/fa";

type ItemProps = {
  type: string;
  where: string;
  course: string;
};

const knowledge: ItemProps[] = [
  {
    where: "UniCesumar",
    type: "College",
    course: "System and Development Analysis",
  },
  {
    where: "Ada Tech",
    type: "Course",
    course: "Front-End Developer",
  },
  {
    where: "Udemy",
    type: "Course",
    course: "DevOps | Figma + UI/UX Design",
  },
];

export const Aboutme = () => {
  return (
    <section>
      <header className="flex flex-col it py-4">
        <h4 className="font-semibold">Education</h4>
        <hr />
      </header>
      <main>
        <ul className="flex flex-col gap-2">
          {knowledge.map((x) => (
            <div key={x.course} className="flex flex-row gap-2">
              <div className="p-4 text-lg items-center justify-center bg-sky-400 rounded-md">
                <FaStar />
              </div>
              <header>
                <p>
                  {x.where} - {x.type}
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
