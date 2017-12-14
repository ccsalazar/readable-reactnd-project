import {sortPosts} from './posts';

import {
  SET_FILTER
} from './types'

export const setFilter = filter => ({
  type:SET_FILTER,
  filter
});

export const setFilterAndSort = (filter)=>dispatch=>{
  dispatch(setFilter(filter));
  dispatch(sortPosts(filter));
};
