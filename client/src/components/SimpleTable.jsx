import React from "react";

export default function SimpleTable({ columns, rows }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Checked In':
        return 'bg-blue-100'; 
      case 'Pre-Procedure':
        return 'bg-yellow-100'; 
      case 'In-progress':
        return 'bg-red-200'; 
      case 'Closing':
        return 'bg-purple-200'; 
      case 'Recovery':
        return 'bg-orange-200'; 
      case 'Complete':
        return 'bg-green-100'; 
      default:
        return 'transparent';
    }
  }; 

  return (
    <div className="p-4 min-h-0">
      <table className="w-full table-fixed border-separate border-spacing-y-2">
        <thead>
          <tr>
            {columns.map((column) => (
              <th 
                key={column.id} 
                className="text-center bg-gray-100 p-2 font-bold border border-gray-300"
              >
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
                const isStatusColumn = column.id === 'current_status';
                const backgroundColor = isStatusColumn
                  ? getStatusColor(value)
                  : 'transparent';

                return (
                  <td
                    key={column.id}
                    className={`text-center p-2 border border-gray-300 ${backgroundColor}`}
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
