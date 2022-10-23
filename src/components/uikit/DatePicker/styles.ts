import tw, { styled, css } from "twin.macro";

import DateTimePicker from "react-date-picker/dist/entry.nostyle";

import { ICustomDatePickerProps } from "./interface";

const field = {
  default: tw`rounded-default border-1 border-solid border-gray-400 bg-white px-12 min-h-48 transition-colors duration-300 hover:border-gray-900`,
  error: tw`border-red-700 hover:border-red-700 focus:border-red-700 active:border-red-700`,
};

export const CalendarCss = css`
  .react-calendar,
  &.react-calendar {
    ${tw`bg-white box-border border-1 border-gray-400`};
    width: 350px;
    max-width: 100%;
    line-height: 1.125em;

    * {
      ${tw`box-border`};

      &:before,
      &:after {
        ${tw`box-border`};
      }
    }

    button {
      ${tw`m-0 border-0 outline-none`};

      &:enabled {
        ${tw`cursor-pointer`};
      }
    }

    &__navigation {
      ${tw`h-44 flex`};

      button {
        ${tw`min-w-44`};
        background: none;

        &:enabled {
          ${tw`hover:bg-gray-300 focus:bg-gray-300`};
        }

        &:disabled {
          ${tw`bg-gray-100 text-gray-400 cursor-not-allowed`};
        }
      }
    }

    &__month-view {
      &__weekdays {
        ${tw`text-center uppercase font-bold`};
        font-size: 0.75em;

        &__weekday {
          padding: 0.5em;
        }
      }

      &__weekNumbers {
        ${tw`font-bold`};

        .react-calendar__tile {
          ${tw`flex items-center justify-center`};
          font-size: 0.75em;
          padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
        }
      }

      &__days__day {
        &--weekend {
          ${tw`text-red-600`};
        }

        &--neighboringMonth {
          ${tw`text-gray-500`};
        }
      }
    }

    &__tile {
      ${tw`max-w-full text-center`};
      padding: 0.75em 0.5em;
      background: none;

      &:disabled {
        ${tw`bg-gray-100 text-gray-400 pointer-events-none`};
      }

      &:enabled {
        ${tw`hover:bg-gray-300 focus:bg-gray-300`};
      }

      &--now {
        ${tw`bg-blue-400`};

        &:enabled {
          ${tw`hover:bg-blue-200 focus:bg-blue-200`};
        }
      }

      &--hasActive {
        background: #76baff;

        &:enabled {
          &:hover {
            background: #a9d4ff;
          }

          &:focus {
            background: #a9d4ff;
          }
        }
      }

      &--active {
        ${tw`bg-red-600 text-white`};

        &:enabled {
          ${tw`hover:bg-red-100 hover:text-black focus:bg-red-100 focus:text-black`};
        }
      }
    }

    &__year-view .react-calendar__tile {
      padding: 2em 0.5em;
    }

    &__decade-view .react-calendar__tile {
      padding: 2em 0.5em;
    }

    &__century-view .react-calendar__tile {
      padding: 2em 0.5em;
    }

    &--doubleView {
      width: 700px;

      .react-calendar__viewContainer {
        ${tw`flex`};
        margin: -0.5em;
      }

      .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
      }
    }

    &--selectRange .react-calendar__tile--hover {
      background-color: #e6e6e6;
    }
  }
`;

export const StyledDatePicker = styled(DateTimePicker)<ICustomDatePickerProps>`
  &.text-gray-900 {
    .react-date-picker__wrapper {
      ${tw`text-gray-900`};

      svg {
        ${tw`text-gray-500`}
      }
    }
  }

  .react-date-picker,
  &.react-date-picker {
    ${({ inline }) => (inline ? tw`inline-flex` : tw`block`)};

    ${tw`relative box-border`};

    * {
      ${tw`box-border`};

      &:before,
      &:after {
        ${tw`box-border`};
      }
    }

    &__wrapper {
      ${tw`flex flex-grow flex-shrink-0 items-center text-gray-500 h-48`};
      ${field.default};
      ${tw`pl-10 pr-6`};

      ${({ error }) => error && field.error};
    }

    &__inputGroup {
      ${tw`flex flex-grow items-center box-content h-full cursor-pointer pl-2 pr-2 pt-0 pb-0`};
      min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);

      input[type="date"] {
        ${tw`hidden`}
      }

      &__divider {
        ${tw`pt-1 pb-1 pl-0 pr-0 whitespace-pre text-gray-500`};
      }

      &__input {
        ${tw`relative box-content placeholder-gray-500 bg-transparent outline-none border-0 pl-1 pr-1 pt-0 pb-0 `};
        min-width: 0.54em;
        font: inherit;
        -moz-appearance: textfield;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          ${tw`m-0`};
          -webkit-appearance: none;
        }

        &--hasLeadingZero {
          margin-left: -0.54em;
          padding-left: calc(1px + 0.54em);
        }
      }
    }

    &__button {
      ${tw`border-0 bg-transparent pt-4 pb-4 pl-6 pr-6`};

      svg {
        ${tw`outline-none`};
        display: inherit;
      }

      &:enabled {
        ${tw`cursor-pointer`};
      }
    }

    &__calendar {
      ${tw`absolute z-10 !left-[-54px]`}
      width: 350px;
      max-width: 100vw;
      border-width: thin;
      transform: scale(0.7) translateY(10px);

      &-button {
        ${tw`pt-1`};
      }

      &--closed {
        ${tw`hidden`};
      }

      .react-calendar {
        border-width: thin;
      }
    }

    &--disabled {
      ${tw`pointer-events-none`};

      .react-date-picker {
        &__wrapper {
          ${tw`bg-gray-100 border-gray-100 text-gray-500 ring-0`};
        }

        &__inputGroup__input {
          ${tw`select-none`};
        }

        &__calendar-button {
          ${tw`text-gray-300`};
        }
      }
    }

    &--open .react-date-picker__wrapper {
      ${tw`border-gray-900 ring ring-blue-400`};
      ${({ error }) => error && tw`border-red-700`};
    }

    ${CalendarCss};
  }
`;
