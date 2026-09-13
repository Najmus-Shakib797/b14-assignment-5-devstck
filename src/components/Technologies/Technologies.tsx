import { use } from "react";
import type { TechnologyType } from "../../Types/TechnologyType";
import Technology from "../Technology/Technology";

export interface TechnologiesProps {
  technologiesFetch: Promise<TechnologyType[]>;

  handleAddTechnologies: (technology: TechnologyType) => void;

  addTechnologies: TechnologyType[];
}

export default function Technologies({
  technologiesFetch,
  handleAddTechnologies,
  addTechnologies,
}: TechnologiesProps) {
  const technologies = use(technologiesFetch);

  return (
    <div className="container mx-auto">
      <div className="flex gap-6 ">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((technology) => (
            <Technology
              key={technology.id}
              technology={technology}
              handleAddTechnologies={handleAddTechnologies}
              addTechnologies={addTechnologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
