import React from 'react';

import toast, {Toaster} from 'react-hot-toast';

import './style/Notifications.scss';

import NoticeBell from './assets/notification-bing.svg?jsx';

const Notifications = () => {
    return (
        <div className="notifications">
            <div
                className="notifications__icon"
                onClick={() => {
                    toast.success('Уведомление', {
                        iconTheme: {
                            primary: 'black',
                            secondary: 'white',
                        },
                    });
                }}
            >
                <NoticeBell />
            </div>
            <Toaster />
        </div>
    );
};

export default Notifications;
