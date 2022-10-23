import { ChangeEvent, FocusEvent, useEffect, useMemo, useState } from "react";

import IProps from "./interface";

function InputMask(props: IProps) {
  const {
    Input,
    mask,
    maskSymbol,
    hasAnySymbols,
    className,
    defaultValue,
    onFocus,
    onChange,
    fullFill = true,
    isUpperCase = false,
  } = props;

  const [value, setValue] = useState<string>(() => mask);

  useEffect(() => {
    setValue(() => mask);
    return () => {
      setValue(() => mask);
    };
  }, [mask]);

  useEffect(() => {
    setValue(defaultValue ?? value);
  }, [defaultValue]);

  // изменение позиции курсора с планировкой анимации (для избежания скачков курсора в конец инпута)
  const changeCursorPosition = (
    e: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>,
    index: number,
  ) => requestAnimationFrame(() => e.target.setSelectionRange(index, index));

  // обработка изменения значения
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // текущее значение в инпуте
    let currentValue = e.target.value;
    // текущая позиция курсора
    let currentIndex = (e.target.selectionStart ?? 1) - 1;
    // было ли изменение значения
    let isChanged = false;

    // проверка на удаление символа
    if (currentValue.length < mask.length) {
      // наращиваем индекс так как маска меньше текущего значения
      ++currentIndex;

      // если текущий символ в маске является маскирующим заменяем его на маскирующий
      if (mask[currentIndex] === currentMaskSymbol) {
        currentValue = `${value.substring(0, currentIndex)}${currentMaskSymbol}${value.substring(
          currentIndex + 1,
        )}`;
        setValue(currentValue);
        isChanged = true;
      }

      // поиск ближайешего к началу маскирующего символа после удаления
      do {
        --currentIndex;
      } while (mask[currentIndex] !== currentMaskSymbol && currentIndex >= 0);

      // наращиваем индекс так как указатель нужен на месте после маскирующего символа
      ++currentIndex;
    } else {
      // текущий введенный символ
      const inputedSymbol = currentValue[currentIndex];

      // проверка на введенное число если необходимо
      if (hasAnySymbols || (!hasAnySymbols && !isNaN(Number(inputedSymbol)))) {
        // проверка на соответсвие текущий позиции маскирующему элементу, если не равны находим ближайший маскирующий элемент
        if (mask[currentIndex] !== currentMaskSymbol)
          currentIndex = mask?.indexOf(currentMaskSymbol, currentIndex);

        // если элемент найдем меняем значение инпута на найденной позиции
        if (currentIndex !== -1) {
          currentValue = `${value.substring(0, currentIndex)}${inputedSymbol}${value.substring(
            currentIndex + 1,
          )}`;
          setValue(currentValue);
          isChanged = true;

          currentIndex = mask?.indexOf(currentMaskSymbol, currentIndex + 1);
        }
      }

      // для safari (если мы в конце маски не переносить указатель вначало)
      if (currentIndex === -1) {
        currentIndex = mask.length;
      }
    }

    // переносим курсор на следующий маскирующий символ
    changeCursorPosition(e, currentIndex);

    // вызываем событие изменения из пропсов если оно есть
    if (onChange && isChanged) {
      if ((fullFill && currentValue.indexOf(currentMaskSymbol) !== -1) || currentValue === mask) {
        onChange(undefined as any);
      } else {
        onChange(currentValue as any);
      }
    }
  };

  // обработка фокуса на элементе для переноса курсора на первый символ маски
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    let index = -1;

    // ищем ближайщий маскирующий символ
    if (!value) {
      setValue(mask);
      index = mask?.indexOf(currentMaskSymbol);
    } else index = value?.indexOf(currentMaskSymbol);

    // если символ найден меняем позицию курсора
    if (index !== -1) {
      changeCursorPosition(e, index);
    }

    // вызываем событие фокуса из пропсов если оно есть
    if (onFocus) onFocus(e);
  };

  const isEmpty = useMemo(() => value === mask, [value, mask]);
  const currentMaskSymbol = useMemo(() => maskSymbol ?? "_", [maskSymbol]);

  const inputProps = {
    ...props,
    value: isUpperCase ? value.toUpperCase() : value,
    placeholder: mask,
    onChange: handleChange,
    onFocus: handleFocus,
    className: `focus:text-gray-900 placeholder-gray-500 inline-flex items-center rounded-default border-1 border-gray-400 px-12 min-h-48 transition-[border-color, color, fill, stroke] hover:border-gray-500 ${
      isEmpty ? "text-gray-500" : "text-gray-900"
    } ${className ? className : ""}`,
    type: "tel",
  };

  return Input ? <Input {...inputProps} /> : <input {...inputProps} />;
}

export default InputMask;
