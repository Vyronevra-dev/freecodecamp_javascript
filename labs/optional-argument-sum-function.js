function addTogether(...args) {
  const isValidNumber = (val) => typeof val === "number" && Number.isFinite(val);

  const [first, second] = args;

  if (!isValidNumber(first)) {
    return undefined;
  }

  if (args.length === 1) {
    return function (nextArg) {
      if (!isValidNumber(nextArg)) {
        return undefined;
      }
      return first + nextArg;
    };
  }

  if (!isValidNumber(second)) {
    return undefined;
  }

  return first + second;
}
