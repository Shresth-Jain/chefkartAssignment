import React from 'react';
import { message, Popconfirm } from 'antd';

const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success('Click on Yes');
  };
  