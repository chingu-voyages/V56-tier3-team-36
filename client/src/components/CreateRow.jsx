export function createRow(columns, values, id) {
  const row = { id };
  columns.forEach((column, index) => {
    row[column.id] = values[index];
  });
  return row;
}