import { createContext } from 'react';

const DataContext = createContext({
  handleUpdateContact: () => ({}),
  handleRemoveContact: () => ({}),
  handleShowUpdateHistory: () => ({}),
});

export default DataContext;
