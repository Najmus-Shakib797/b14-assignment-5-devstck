import { Suspense, useState } from "react";
import Technologies from "./components/Technologies/Technologies";
import type { TechnologyType } from "./Types/TechnologyType";
import StackCard from "./components/StackCard/StackCard";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  const technologiesFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/public/data.json");
    const data = await res.json();

    return data;
  };

  const [addTechnologies, setAddTechnologies] = useState<TechnologyType[]>([]);

  // Add technology
  const handleAddTechnologies = (technology: TechnologyType): void => {
    const added = addTechnologies.find((item) => item.id === technology.id);

    if (added) {
      toast.warn(`${technology.name} has already been added`);
    } else {
      setAddTechnologies([...addTechnologies, technology]);

      toast.success(`${technology.name} Added Successfully`);
    }
  };

  // Remove one technology
  const handleRemoveTechnologies = (id: string): void => {
    const remainingTechnologies = addTechnologies.filter(
      (technology) => technology.id !== id,
    );

    setAddTechnologies(remainingTechnologies);

    toast.success("Technology deleted successfully");
  };

  // Remove all
  const handleRemoveAll = (): void => {
    setAddTechnologies([]);
    toast.success("ALL deleted successfully");
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="mx-30">
        <div className="flex  gap-10">
          <Suspense fallback={<p>Loading...</p>}>
            <Technologies
              technologiesFetch={technologiesFetch()}
              handleAddTechnologies={handleAddTechnologies}
              addTechnologies={addTechnologies}
            />

            <StackCard
              addTechnologies={addTechnologies}
              handleRemoveTechnologies={handleRemoveTechnologies}
              handleRemoveAll={handleRemoveAll}
            />
          </Suspense>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
