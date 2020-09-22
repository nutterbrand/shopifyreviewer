export const filterDomain = domain => domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};