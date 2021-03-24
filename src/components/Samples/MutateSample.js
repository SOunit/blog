import React from 'react';

const MutateSample = () => {
  console.clear();
  const stateList = [1, 2, 3];
  console.log(stateList, 'original arrays');

  let result = stateList.filter((element) => element !== 1);
  console.log(result, 'remove from array');

  result = [...stateList, 99];
  console.log(result, 'add item to array');

  result = stateList.map((el) => (el === 1 ? 99 : el));
  console.log(result, 'replace item in array');

  const state = { name: 'test', age: 28 };
  console.log(state, 'original object');

  result = { ...state, name: 'Tom' };
  console.log(result, 'update object');

  result = { ...state, book: 'new book' };
  console.log(result, 'add property to object');

  // if you install _ library
  // result = _.omit(state, 'age');
  // console.log(result, 'remove property from object');

  return <div></div>;
};

export default MutateSample;
