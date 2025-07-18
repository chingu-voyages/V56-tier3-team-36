import './Table.css';

export default function SimpleTable({ columns, rows }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Checked In':
        return '#DBEAFE'; // light blue
      case 'Pre-Procedure':
        return '#FEF3C7'; // light yellow
      case 'In-progress':
        return '#FDE68A'; // soft orange
      case 'Closing':
        return '#E9D5FF'; // purple-ish
      case 'Recovery':
        return '#D1FAE5'; // green-ish
      case 'Complete':
        return '#E5E7EB'; // gray
      case 'Dismissal':
        return '#FECACA'; // red-ish
      default:
        return 'transparent';
    }
  }; 

  return (
    <div className='table-container'>
      <table className='simple-table'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} style={{ 
                minWidth: column.minWidth, 
                textAlign: 'center', 
                backgroundColor: '#F9FAFB', 
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
