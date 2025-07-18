import './Table.css';

export default function SimpleTable({ columns, rows }) {
  return (
    <div className='table-container'>
      <table className='simple-table'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} style={{ minWidth: column.minWidth, textAlign: 'center' }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column) => (
                <td key={column.id} style={{ textAlign: 'center' }}>
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
