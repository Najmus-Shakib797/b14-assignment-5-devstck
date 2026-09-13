import type { TechnologyType } from "../../../Types/TechnologyType";

export interface StackSmallCardProps {
  addTechnologies: TechnologyType[];
  handleRemoveTechnologies: (technologyId: string) => void;
}

export default function StackSmallCard({
  addTechnologies,
  handleRemoveTechnologies,
}: StackSmallCardProps) {
  return (
    <div>
      {addTechnologies.map((addTechnology) => (
        <div
          key={addTechnology.id}
          className="flex items-center justify-between w-70 my-2 p-4 bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <div className="flex justify-between items-center space-x-3">
            <img
              alt={addTechnology.name}
              className="w-8 h-8 rounded-md"
              src={addTechnology.icon}
            />

            <div>
              <p className="text-gray-800">{addTechnology.name}</p>

              <p className="text-sm text-gray-500">{addTechnology.category}</p>
            </div>
          </div>

          <button
            onClick={() => handleRemoveTechnologies(addTechnology.id)}
            className="text-gray-400 hover:text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
