import PropTypes from 'prop-types'

function User(props) {
    if (!props.isLoggedIn) {
        return (
            <>
                <h1> Henüz Giriş Yapmadınız.  </h1>
            </>
        )
    }
    return (
        <>
            <h1>
                {`Hoşgeldin ${props.name} ${props.surname}(${props.age})`}
            </h1>
            <h4> 
            {props.address.title} {props.address.zipcode} 
            </h4>
            <ul>
                {props.friends.map((friend) =>
                    (
                        <li key={friend.id}> {friend.id} - {friend.name} </li>
                    ))}
            </ul>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({title: PropTypes.string, zipcode: PropTypes.number})
}

User.defaulProps = {
    isLoggedIn: false
}

export default User;