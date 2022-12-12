import React from 'react';
import { Table } from 'antd';
import data from './mockData'
// import type { ColumnsType, TableProps } from 'antd/es/table';

// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];
/**
id
first_name
last_name
email
gender
ip_address
airport code
time
status
mobile
area
show
edit

sort failing in
ip address
time


Problem
not showing boolean value


*/ 
 
const columns = [
{
  title:'Id',
  dataIndex: 'id',
  sorter: (a, b) => a.id - b.id,

},
  {
    title: 'First Name',
    dataIndex: 'first_name',
    sorter: (a, b) => a.first_name.localeCompare(b.first_name)
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    sorter: (a, b) => a.last_name.localeCompare(b.last_name)
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email)
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: (a, b) => a.gender.localeCompare(b.gender)
    //CHECK SORT FUNCTIONALITY
  },
  {
    title: 'IP Address',
    dataIndex: 'ip_address',
    sorter: (a, b) => a.ip_address.localeCompare(b.ip_address)
  },
  {
    title: 'Airport Code',
    dataIndex: 'airport_code',
    sorter: (a, b) => a.airport_code.localeCompare(b.airport_code)
  },
  {
    title: 'Time',
    dataIndex: 'time',
    sorter: (a, b) => a.time- b.time
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: (a, b) => a.status.localeCompare(b.status)
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    sorter: (a, b) =>  a.mobile.localeCompare(b.mobile)
  },
  {
    title: 'Area',
    dataIndex: 'area',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.area.localeCompare(b.area)
  },
  {
    title: 'Show',
    // accessor: d => d.toString()
    dataIndex: 'show',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.show.localeCompare(b.show),
    getProps: (state, rowInfo, column) => {
      return {
          style: {
              background: rowInfo && rowInfo.row.show==="true" ? 'green' : "red",
          },
      };
  },
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.edit.localeCompare(b.edit)
  }
];


// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };
// const onrow=(record,rowIndex)=>{
//   return{
//     record
//     onClick:(event)=>{
//       console.log(record);
//     }
//   }  
// }
export default function FilterTable() {

  return (
    
    <div className="FilterTable">
        {/* <Table columns={columns} dataSource={data} onChange={onChange}/>; */}
        <Table columns={columns} dataSource={data}/>;
    </div>
  );
}



