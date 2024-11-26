import Button from "./Button";
export default function TasksList({ onCreate, tasksList }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <p>
        <Button onClick={onCreate}>+ Add Project</Button>
      </p>
      <ul className="mt-8 flex flex-col gap-1">
        {tasksList.projects.map((project) => (
          <li>
            <button className="w-full text-left hover:bg-stone-400 hover:text-stone-800 py-1 px-2 transition-colors rounded-sm">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
