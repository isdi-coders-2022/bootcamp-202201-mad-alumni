/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Gentlemen } from './gentleman';
import { CABALLEROS } from './gentlemen.data';

export function Button() {
  const [gentleman, gentlemen] = useState(CABALLEROS);

  const deleteGentleman = (gentleman) => {
    gentleman.filter((item) => item.id !== gentleman.id);
  };

  function handleClick() {
    deleteGentleman(gentleman);
  }
}
