import createWebStorage from "redux-persist/es/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem: (_key) => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(value),
    removeItem: (_key) => Promise.resolve(),
  };
};

const storage =
  typeof window === "undefined" ? createNoopStorage() : createWebStorage();

export default storage;
