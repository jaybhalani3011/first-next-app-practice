import React from 'react';
import style from '../styles/Pagenotfound.module.css';
;

export default function PageNotFound() {

    return (
        <div className={style.main}>
            <div className={style.fof}>
                <h1 className={style.heading}>Error 404</h1>
            </div>
        </div>
    )
}
