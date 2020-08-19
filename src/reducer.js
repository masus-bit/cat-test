const InitialState = {
  cards: [
    {
      id: 1,
      name: `фуа-гра`,
      weight: `0,5`,
      stock: {title:`10 порций`, text:`мышь в подарок`},
      description: `Печень утки разварная с артишоками.`,
      disabled: true,
    },
    {
      id: 2,
      name: `рыбой`,
      weight: `2`,
      stock: {title:`40 порций`, text:` 2 мыши в подарок`},
      description: `Головы щучьи с чесноком да свежайшая сёмгушка`,
      disabled: false,
    },
    {
      id: 3,
      name: `курой`,
      weight: `5`,
      stock: {title:`100 порций`, text:`5 мышей в подарок`},
      description: `Филе из циплят с трюфелями в бульоне`,
      disabled: false,
    },
  ],
};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
  }
  return state;
};
