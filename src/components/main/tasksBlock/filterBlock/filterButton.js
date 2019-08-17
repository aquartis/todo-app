import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../mainScreen.module.scss';

export const FilterButton=(props)=>(
    <button className={styles.filter_button}
    onClick={props.onClick}
    disabled={props.active}
    >
    {props.children}</button>
)

FilterButton.propsTypes={
   onClick:PropTypes.func.isRequired,
   active:PropTypes.bool.isRequired,
   children:PropTypes.node.isRequired
}