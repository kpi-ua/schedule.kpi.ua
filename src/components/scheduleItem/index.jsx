import style from './style.scss';
import { makeStyles } from '@material-ui/core/styles';

import teacherIcon from '../../assets/icons/teacher.svg';
import locationIcon from '../../assets/icons/location.svg';

const useStyles = makeStyles((theme) => ({
    type: {
        width: '74px',
        height: '27px',
        lineHeight: '27px',
        textAlign: 'center',
        backgroundColor: '#949DFF',
        borderRadius: '8px',
        color: '#fff',
        fontWeight: '600'
    },
    subject: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px',
        color: '#141518',
        marginTop: '13px',
    },
    teacher: {
        fontWeight: '600',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#141518',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
    },
    location: {
        fontWeight: '600',
        fontSize: '13px',
        lineHeight: '16px',
        color: '#141518',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '7px'
    }
}));

export const ScheduleItem = ({ scheduleItemData, activeTab }) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.type}>
                Лекція
            </div>
            <div className={classes.subject}>
                Вишмат
            </div>
            <div className={classes.teacher}>
                <img src={teacherIcon} alt='teacher'/>
                Викладач
            </div>
            <div className={classes.location}>
                <img src={locationIcon} alt='location'/>
                -18
            </div>
        </div>
    )
}

export default ScheduleItem;
