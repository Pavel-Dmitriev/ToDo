function useErrorText(name: string, errors: { [x: string]: any }) {
  if (name.includes(".")) {
    const names = name?.split(".");

    return errors[names[0]]?.[names[1]]?.message;
  }

  return errors?.[name]?.message;
}

export default useErrorText;
