type LocalStorageGetItem = {
    key: string;
  };
  
  export const getItem = (data: LocalStorageGetItem) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(data.key);
    }
  };
  
  type LocalStorageRemoveItem = {
    key: string;
  };
  
  export const removeItem = (data: LocalStorageRemoveItem) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(data.key);
    }
  };
  
  type LocalStorageSetItem = {
    key: string;
    data: any;
  };
  
  export const setItem = (data: LocalStorageSetItem) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(data.key, data.data);
    }
  };