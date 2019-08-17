import React from 'react';
import FilterButton from './filterButtonContainer';
import { VisibilityFilters } from '../../../../todo-actions/actions';
import styles from '../../mainScreen.module.scss';



export const FilterBlock=()=>(
    <div className={`${styles.filter_block} flex-row`}>
        <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>  
    </div>
)