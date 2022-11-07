import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
function User() {
    let { id } = useParams();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
    }, [id]);

    return (
    <div>
        <Link to="/users"> Geri Dön</Link>
        {loading && 
          <div>Loading...</div>
        }
        {!loading &&
         <div>
            <code> {JSON.stringify(user)} </code>
            {
              parseInt(id) - 1 >= 1 &&
            <div>
              <Link to={`/users/${parseInt(id) - 1}`} > Previous User ({parseInt(id) - 1}) </Link>
            </div>
            } 
            {
              parseInt(id) + 1 <= 10 &&
            <div>
              <Link to={`/users/${parseInt(id) + 1}`} > Next User ({parseInt(id) + 1}) </Link>
            </div>
            } 
        </div>
        }
    </div>
  )
}

export default User