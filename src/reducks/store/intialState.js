const initialState = {
  opponents: {
    name: "",
    birthdayYear: "",
  },
  years: {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  },
  times: {
    hour: new Date().getHours(),
    minit: new Date().getMinutes(),
    second: new Date().getSeconds(),
  },
};

export default initialState;
