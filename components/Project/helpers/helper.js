import React from 'react';

export const filterDomain = domain => domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [ item[ key ] ]: item,
    };
  }, initialValue);
};

export const useStickyState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
          ? JSON.parse(stickyValue)
          : defaultValue;
    }
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};