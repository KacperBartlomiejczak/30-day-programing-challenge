import Button from "./Button";

export default function NoProjectSelected({ onCreate }) {
  return (
    <section className="flex justify-center items-center flex-col w-3/4">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src="src/assets/no-projects.png"
        alt=""
      />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No project selected
      </h2>
      <p>
        <Button onClick={onCreate}>+ Add Project</Button>
      </p>
    </section>
  );
}
