// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <li className="card-item">
      <Link to={`/team-matches/${id}`} className="team-item-link">
        <div className="image-name-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
