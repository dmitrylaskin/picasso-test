import React from 'react';
import {Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import styles from './header.module.css'

const Header = ({title, hasGoBackButton}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            {hasGoBackButton &&
                <div className={styles.iconWrapper}>
                    <Icon size={'large'} name={"x"} onClick={() => navigate('/')}/>
                </div>}
        </div>
    );
};

export {Header};