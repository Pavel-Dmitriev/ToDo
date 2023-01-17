import DeleteIcon from "@mui/icons-material/Delete";
import CloseCard from "components/icons/CloseCard";

import { IFooterButtons } from "./interface";

function FooterButtons({ todoItem, onClose, onDeleteTodo, createdAt }: IFooterButtons) {
  return (
    <div className="mx-10 flex items-center justify-between border-t-1 border-gray-200 py-16">
      <button onClick={() => onClose(todoItem!)}>
        <CloseCard />
      </button>

      <span className="text-2xs text-gray-300">Создано {createdAt}</span>

      <button onClick={() => onDeleteTodo(todoItem)}>
        <DeleteIcon fontSize="small" />
      </button>
    </div>
  );
}

export default FooterButtons;
