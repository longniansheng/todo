import React from 'react';
import FilterLink from './FilterLink';
import RemoveButton from './RemoveButton';

export default function Footer() {
  return (
    <>
      <div>
        显示： {'   '}
        <FilterLink filter="SHOW_ALL">全部</FilterLink>
        {',   '}
        <FilterLink filter="SHOW_COMPLETED">已完成</FilterLink>
        {',   '}
        <FilterLink filter="SHOW_ACTIVE">未完成</FilterLink>
      </div>
      <div>
        <RemoveButton remove="REMOVE_ALL">删除全部</RemoveButton>
        <RemoveButton remove="REMOVE_COMPLETED">删除已完成</RemoveButton>
      </div>
    </>
  );
}
