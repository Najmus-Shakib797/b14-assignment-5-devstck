import type { TechnologyType } from "../../Types/TechnologyType";

export interface TechnologyProps {
  technology: TechnologyType;
  handleAddTechnologies: (technology: TechnologyType) => void;
  addTechnologies: TechnologyType[];
}

export default function Technology({
  technology,
  handleAddTechnologies,
  addTechnologies,
}: TechnologyProps) {
  const added = addTechnologies.find((item) => item.id === technology.id);

  return (
    <div
      className={`card bg-white rounded-[2rem] p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] flex flex-col justify-between h-full ${
        added ? "border-2 border-red-500" : "border border-gray-100"
      }`}
    >
      <div>
        {/* Logo + Badge */}
        <div className="flex justify-between items-center mb-6">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />

          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-50 text-cyan-600">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed min-h-[64px]">
          {technology.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-6 justify-between items-center">
          <div className="flex gap-2">
            <span className="bg-gray-50 border border-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-lg">
              {technology.category}
            </span>

            <span className="bg-gray-50 border border-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-lg">
              {technology.difficulty}
            </span>
          </div>

          <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
            <span className="text-amber-400 text-base">★</span>
            {technology.rating}
          </p>
        </div>
      </div>

      {/* Button */}
      <button
        disabled={!!added}
        onClick={() => handleAddTechnologies(technology)}
        className={`w-full font-semibold py-3.5 px-4 rounded-xl transition-colors duration-200 ${
          added
            ? "bg-green-500 text-black-500 cursor-not-allowed"
            : "bg-[#0B132B] text-white hover:bg-black"
        }`}
      >
        {added ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
