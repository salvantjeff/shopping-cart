import './SupportPage.css';
const imgURL = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN1cHBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60';

function SupportPage() {
    return (
        <div className='support-page'>
            <div className='support-page-wrapper'>
                <div className='support-image-container'>
                    <img className='support-image' src={imgURL} alt="support"/>
                </div>
                <div className='support-message'>
                    <p>Please let us know how we can help</p>
                </div>
                <div className='support-contacts'>
                    <div>facebook</div>
                    <div>ig</div>
                    <div>
                        twitter
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;