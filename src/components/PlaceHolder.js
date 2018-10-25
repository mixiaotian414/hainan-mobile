import React from 'react';
import styles from './PlaceHolder.less'
import classnames from 'classnames'
import { WingBlank, WhiteSpace } from 'antd-mobile';

export default function ({ className = '',title, ...restProps }) {
  const PlaceHolder = ({ className = '',title, ...restProps }) => (
    <div className={classnames(styles["placeholder"],styles[className])} {...restProps}>{title}</div>
  );
  return (
    <div style={{ padding: '0' }}>
      <WingBlank><PlaceHolder title={title}  /></WingBlank>
    </div>
  );
}
