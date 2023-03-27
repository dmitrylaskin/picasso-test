import React from "react";
import styles from "./user-info.module.css";

const UserInfo = ({name, address, email, username, phone, website}) => {
    return <ul className={styles.userInfo}>
        <li className={styles.row}>
            <span className={styles.title}>Name:</span>
            <span className={styles.desc}>{name}</span>
        </li>
        <li className={styles.row}>
            <span className={styles.title}>Username:</span>
            <span className={styles.desc}>{username}</span>
        </li>
        <li className={styles.row}>
            <span className={styles.title}>Email:</span>
            <span className={styles.desc}>{email}</span>
        </li>
        <li className={styles.row}>
            <span className={styles.title}>Address:</span>
            <ul className={styles.address}>
                <li className={styles.desc}>{address?.street}</li>
                <li className={styles.desc}>{address?.suite}</li>
                <li className={styles.desc}>{address?.city}</li>
                <li className={styles.desc}>{address?.zipcode}</li>
            </ul>

        </li>
        <li className={styles.row}>
            <span className={styles.title}>Phone:</span>
            <span className={styles.desc}>{phone}</span>
        </li>
        <li className={styles.row}>
            <span className={styles.title}>Website:</span>
            <span className={styles.desc}>{website}</span>
        </li>
    </ul>;
}

export {UserInfo}