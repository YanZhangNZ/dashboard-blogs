import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
    const { notifications } = props;

    return(
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Notifications</span>
                    { notifications && <ul className='notifications' data-test="notifications" >
                        { notifications.map(notification => (
                            <li key={notification.id}>
                                <span className="pink-text">{notification.user}</span>
                                <span>{notification.content}</span>
                                <div className="grey-text note-date">
                                    {/* {moment(notification.time.toDate()).fromNow()} */}
                                    {notification.time.toString()}
                                </div>
                            </li>
                        ))}
                    </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Notifications;