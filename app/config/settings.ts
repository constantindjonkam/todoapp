const settings = {
  dev: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },

  prod: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
