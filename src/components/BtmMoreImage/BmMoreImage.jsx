import css from './BtmMoreImage.module.css'

export const BtmMoreImage = ({onClick}) => { 
    return <>
    <button className={css.Btm} onClick={onClick}>More image</button> 
    </>
};