import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { id: 1, title: 'Conan the Barbarian', year: '1982' },
  { id: 2, title: 'The Terminator', year: '1984' },
  { id: 3, title: 'Commando', year: '1985' },
];

const columns = [
  {
    name: 'Title',
    selector: row => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: row => row.year,
    sortable: true,
  },
];

const Basic = () => {
  return (
    <div>
      <DataTable
        title="Movie List"
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default Basic;