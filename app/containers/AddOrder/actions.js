import * as at from '../../constants/actionTypes';

export function setSelectedGroup(group) {
  return {
    type: at.SET_SELECTED_GROUP,
    payload: group,
  };
}

