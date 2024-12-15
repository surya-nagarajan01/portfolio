import project_constant from "@/constant/project";
import { Card } from "@/elements/card/card";

const ProjectComponent = () => {
  return (
    <>
      <div
        className="w-full  px-2 md:px-8 pb-20 bg-black gap-4 flex flex-col items-center justify-center py-4 overflow-hidden"
        key={1}
      >
        <h1 className="text-4xl md:text-5xl font-bold md:my-11 text-text">
          Projects
        </h1>
        ̵
        {project_constant.map((item) => {
          return (
            <>
              <Card
                image={item.image}
                company={item.company}
                description={item.description}
                number={item.number}
                id={item.id}
                icons={item.stack}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProjectComponent;
