const initialState = () => {
  const state = {
    userInfo: null,
    restaurant: {},
    rests: [
      {id: 1, title:'Maze Grill', category:'fine dining restaurant', location:'Moscow'},
      {id: 2, title:'Boticario', category:'cocktail bar', location:'Moscow'},
      {id: 3, title:'Novikov', category:'lounge bar', location:'Moscow'},
      {id: 4, title:'Novikov', category:'lounge bar', location:'Samara'},
      {id: 5, title:'Novikov', category:'lounge bar', location:'Togliatti'},
  ]
  };

  return state;
};

export default initialState;
