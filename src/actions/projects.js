import uuid from 'uuid';

// ADD_PROJECT
export const addProject = (
  {
    name='',
    description = '',
    cost='',
    note='',
    createdAt=0,
  } = {}
) => ({
  type: 'ADD_PROJECT',
  project: {
    id: uuid(),
    name,
    description,
    cost,
    note,
    createdAt
  }
});

// REMOVE_PROJECT
export const removeProject = ({ id } = {}) => ({
  type: 'REMOVE_PROJECT',
  id
});

// EDIT_PROJECT
export const editProject = (id, updates) => ({
  type: 'EDIT_PROJECT',
  id,
  updates
});