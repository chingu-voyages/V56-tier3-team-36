import './Table.css';

export default function SimpleTable({ columns, rows }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Checked In':
        return '#DBEAFE'; // light blue
      case 'Pre-Procedure':
        return '#FEF3C7'; // light yellow
      case 'In-progress':
        return '#FECACA'; // red -ish
      case 'Closing':
        return '#E9D5FF'; // purple-ish
      case 'Recovery':
        return '#FBBF77'; // light orange
      case 'Complete':
        return '#D1FAE5'; // green-ish
      default:
        return 'transparent';
    }
  }; 

  return (
    <div className='table-container'>
      <table className="w-full table-fixed border-collapse simple-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} style={{ 
                textAlign: 'center', 
                backgroundColor: '#F9FAFB', 
                padding: '8px',
              }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody> 
          {rows.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((column) => {
                const value = row[column.id];
                const isStatusColumn = column.id === 'currentStatus';
                const backgroundColor = isStatusColumn
                  ? getStatusColor(value)
                  : 'transparent';

                return (
                  <td
                    key={column.id}
                    style={{
                      textAlign: 'center',
                      backgroundColor,
                      padding: '8px',
                    }}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
