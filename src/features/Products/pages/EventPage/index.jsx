import React from 'react';
import BackToTop from '../../../../components/BackToTop';
import './EventsPage.css';
function EventPage(props) {
    const handleBackToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="tea">
            <BackToTop onHandleBackToTop={handleBackToTop} />
            <div className="row events">
                Chưa có sự kiện nào
            </div>
        </div>
    );
}

export default EventPage;