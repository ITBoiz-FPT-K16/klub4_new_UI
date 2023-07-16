const Contact = ({ user }) => {
    return (
        <div className="contact hover3">
            <div className="contact_img">
                <img src={user.avatar} alt="" />
            </div>
            <span>{user.name}</span>
        </div>
    );
};
export default Contact;
