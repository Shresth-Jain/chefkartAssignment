import React from 'react';
import { Table } from 'antd';
import data from './mockData'
 
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
    sorter: (a, b) => a.status.localeCompare(b.status),
    render(text, record) {
      return {
        props: {
          style: { background: text==='false' ? "red" : "green" }
        },
        children: <div>{text}</div>
      };
    }
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
    render(text, record) {
      return {
        props: {
          style: { background: text==='false' ? "red" : "green" }
        },
        children: <div>{text}</div>
      };
    }
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.edit.localeCompare(b.edit),
    render(text, record) {
      return {
        props: {
          style: { background: text==='false' ? "red" : "green" }
        },
        children: <div>{text}</div>
      };
    }
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
        <Table columns={columns} dataSource={data} />;
    </div>
  );
}



