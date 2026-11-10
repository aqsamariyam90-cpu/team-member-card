function MemberCard(props) {
    return (
        <div className="card member-card">
            <div className="member-photo">
                Photo
            </div>
            <div className="card-body">
                <h3>{props.name}</h3>
                <h5>{props.role}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default MemberCard;