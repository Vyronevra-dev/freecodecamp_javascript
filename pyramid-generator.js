function pyramid(pattern, rows, inverted) {
  let output = '';

  for (let i = 0; i < rows; i++) {
    const spaces = inverted ? i : rows - 1 - i;
    const chars = inverted ? 2 * (rows - 1 - i) + 1 : 2 * i + 1;
    output += ' '.repeat(spaces) + pattern.repeat(chars) + '\n';
  }

  return '\n' + output;
}


