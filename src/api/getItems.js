const getItems = (number) => {
  let items = [];

  for (let i = 0; i < number; i++) {
    items.push({
      index: i,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora et earum velit eos ducimus exercitationem modi, sint amet voluptatem eum dolorem, architecto voluptate aliquid quo quibusdam molestias",
    });
  }

  return items;
};

export default getItems;
