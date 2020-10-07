const randomList = (length, max = 100) => {
  let list = [];
  for (let i = 0; i < length; i++)
    list.push(Math.floor(Math.random() * (max + 1)));
  return list;
};

export default randomList;
