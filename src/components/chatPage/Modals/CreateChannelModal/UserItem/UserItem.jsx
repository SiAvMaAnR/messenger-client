import PropTypes from 'prop-types'
import config from '../../../../../config/configuration'
import { activityStatus } from '../../../../../constants/system'
import { MessageIcon, RoundCheckbox } from '../../../../_exports'
import './UserItem.scss'

function UserItem({ className, userInfo }) {
  const { login, activityStatus: status, isBanned, image } = userInfo
  const statusClass = status.toLowerCase() === activityStatus.online ? 'online' : ''
  const bannedClass = isBanned ? 'yes' : ''

  const imageSrc = image
    ? `data:image/jpeg;base64, ${image}`
    : `${config.app.publicPath}/defaultImages/user-profile.jpg`

  return (
    <div className={`c-chat-user-item ${className} ${statusClass} ${bannedClass}`}>
      <div id="image">
        <img src={imageSrc} alt="user-img" />
      </div>
      <div id="login">{login}</div>

      <div className="options">
        <div className="message">
          <MessageIcon className="message-icon" />
        </div>
        
        <div className="select">
          <RoundCheckbox className="round-checkbox" />
        </div>
      </div>
    </div>
  )
}

UserItem.defaultProps = {
  className: '',
  userInfo: null
}

UserItem.propTypes = {
  className: PropTypes.string,
  userInfo: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    activityStatus: PropTypes.string,
    isBanned: PropTypes.bool
  })
}

export default UserItem