import NoteIcon from "components/icons/NoteIcon";

function TodoNoteItem({ note }: { note: string }) {
  return (
    <div className="flex">
      <NoteIcon className="mr-4" />
      <span className="text-[10px] leading-[14px] text-primary">{note}</span>
    </div>
  );
}

export default TodoNoteItem;
