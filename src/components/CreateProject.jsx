import { useRef } from "react";

import Input from "./Input";

export default function CreateProject({ onCancel, onSave }) {
  const inputStyles = "p-2 border-b-stone-800 border-2 w-full";
  const labelStyles = "text-md text-stone-900";

  //ref
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    onSave({ title: title, description: description, dueDate: date });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input type="date" ref={dateRef} label="Due Date" />
      </div>
    </div>
  );
}
