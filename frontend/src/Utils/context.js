import { createContext } from 'react';

const DataContext = createContext({
  handleEditContact: () => ({}),
  handleRemoveContact: () => ({}),
  handleShowUpdateHistory: () => ({}),
});

export default DataContext;
