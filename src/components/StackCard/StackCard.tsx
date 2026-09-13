import type { TechnologyType } from "../../Types/TechnologyType";
import StackSmallCard from "./StackSmallCard/StackSmallCard";

export interface StackCardProps {
  addTechnologies: TechnologyType[];
  handleRemoveTechnologies: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function StackCard({
  addTechnologies,
  handleRemoveTechnologies,
  handleRemoveAll,
}: StackCardProps) {
  //   console.log(addTechnologies);

  return (
    <div>
      <div>
        <div className="card-body p-6 border border-dashed rounded-xl w-[420px]">
          <p className="text-gray-600 mb-4">
            {addTechnologies.length > 0
              ? `${addTechnologies.length} technologies selected yet`
              : "No technologies selected yet"}
            .
          </p>
          <div className="border border-dotted rounded-2xl p-10 text-center text-gray-500">
            {addTechnologies.length > 0 ? (
              <StackSmallCard
                addTechnologies={addTechnologies}
                handleRemoveTechnologies={handleRemoveTechnologies}
              ></StackSmallCard>
            ) : (
              " Your stack is empty"
            )}
          </div>
          <button
            onClick={() => handleRemoveAll()}
            className="btn bg-amber-700 rounded-xl"
          >
            Remove all{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
