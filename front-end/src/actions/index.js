import {sortPosts} from './posts';
export const SET_FILTER="SET_FILTER"

export const setFilter = filter => ({
  type:SET_FILTER,
  filter
});

export const setFilterAndSort = (filter)=>dispatch=>{
  dispatch(setFilter(filter));
  dispatch(sortPosts(filter));
};
