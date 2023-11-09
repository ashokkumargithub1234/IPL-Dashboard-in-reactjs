// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const iplLogo = 'https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png '

class Home extends Component {
  state = {teamCards: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data.teams)
    this.setState({
      teamCards: data.teams.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        teamImageUrl: eachItem.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {teamCards, isLoading} = this.state
    // console.log(teamCards)
    return (
      <Link to="/">
        <div className="app-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="home-container">
              <div className="logo-header-container">
                <img src={iplLogo} alt="ipl logo" className="ipl-logo" />
                <h1 className="ipl-header">IPL Dashboard</h1>
              </div>
              <ul className="team-cards-container">
                {teamCards.map(eachCard => (
                  <TeamCard key={eachCard.id} cardDetails={eachCard} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </Link>
    )
  }
}
export default Home
