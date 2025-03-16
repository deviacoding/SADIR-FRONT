import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const BasicDB = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:8000/usersMySql')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (row) => {
    console.log('Edit button clicked for:', row);
  };

  const handleDelete = (row) => {

    console.log('Delete button clicked for:', row);
    
    axios.delete(`http://localhost:8000/users/${row.id}`)
    .then(response => {
      console.log(response)
      fetchData();
    })
    .catch(error => {
      console.error('There was an error!', error);
    });

  };

  const columns = [
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Role',
      selector: row => row.role,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <button className="btn btn-info mx-1" onClick={() => handleEdit(row)}>Edit</button>
          <button className="btn btn-danger" onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <button onClick={fetchData}>Refresh Data</button>
      <DataTable
        title="User List"
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default BasicDB;