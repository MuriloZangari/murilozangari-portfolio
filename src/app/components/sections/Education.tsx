import EducationItem from "../ui/EducationItem";

export default function Education() {
  return (
    <section className="flex flex-col gap-6 border-b border-dashed border-gray-300 p-4 text-justify">
      <h2 className="text-xl text-gray-800 font-bold text-left">Education</h2>
        <EducationItem
            title="PhD in Computer Science"
            university="Federal University of Paraná"
            period="2015 - 2017"
        />
        <EducationItem
            title="Master's in Computer Science"
            university="Federal University of Paraná"
            period="2010 - 2012"
        />
        <EducationItem
            title="Bachelor's in Computer Science"
            university="State University of Maringá"
            period="2006 - 2009"
        />

    </section>

  );
}
