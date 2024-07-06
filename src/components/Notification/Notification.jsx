import s from './Notification.module.css';

const Notification = ({text}) => {
    return (
        <>           
            <p className={s.text}>{text}</p>            
        </>
    );
};

export default Notification;


