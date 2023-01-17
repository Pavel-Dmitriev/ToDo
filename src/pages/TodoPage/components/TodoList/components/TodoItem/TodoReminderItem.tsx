import { useMemo } from "react";
import dayjs from "dayjs";

import NotificationIcon from "components/icons/NotificationIcon";

import { IReminder } from "interface";

function TodoReminderItem({ reminder }: { reminder: IReminder }) {
  const { name, date, time } = reminder;

  const formatDate = useMemo(() => {
    if (date) {
      return dayjs(date).format("DD.MM.YYYY");
    }

    return undefined;
  }, [date]);

  const reminderInfo = useMemo(() => {
    if (name && formatDate && time) return `${name}, ${formatDate}, ${time}`;
    if (name && formatDate) return `${name}, ${formatDate}`;
    if (name && time) return `${name}, ${time}`;
    if (formatDate && time) return `${formatDate}, ${time}`;
    if (name) return name;
    if (formatDate) return formatDate;
    if (time) return `${time}`;
  }, [name, date, time]);

  return (
    <div className="flex">
      <NotificationIcon className="mr-4" />

      <div className="text-[10px] leading-[14px] text-primary">{reminderInfo}</div>
    </div>
  );
}

export default TodoReminderItem;
