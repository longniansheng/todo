import React from 'react';
import FilterLink from './FilterLink';

export default function Footer() {
  return (
    <>
      显示： {'   '}
      <FilterLink filter="SHOW_ALL">全部</FilterLink>
      {',   '}
      <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
      {',   '}
      <FilterLink filter="SHOW_ACTIVE">未完成</FilterLink>
    </>
  );
}
