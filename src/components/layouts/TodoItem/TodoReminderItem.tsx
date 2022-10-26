import { useMemo } from "react";
import dayjs from "dayjs";

import NotificationIcon from "components/uikit/icons/NotificationIcon";

import { IReminder } from "../TodoList/interface";
import isEmpty from "lodash/isEmpty";

function TodoReminderItem({ reminder }: { reminder: IReminder }) {
  const { name, date, time } = reminder;

  const formatDateTime = useMemo(() => {
    const formatDate = dayjs(date).format("DD.MM.YYYY");
    return `${formatDate}, ${time}`;
  }, [date, time]);

  return (
    <div className="flex">
      <NotificationIcon className="mr-4" />
      <div className="text-[10px] leading-[14px] text-primary">
        {name && <span>{name}, </span>}
        <span>{formatDateTime}</span>
      </div>
    </div>
  );
}

export default TodoReminderItem;
