import PropTypes from 'prop-types'
import './RoleIcon.scss'

function RoleIcon({ className = '' }) {
  return (
    <div className={`c-role-icon ${className} `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        id="icon"
      >
        <title>user--role</title>
        <polygon points="28.07 21 22 15 28.07 9 29.5 10.41 24.86 15 29.5 19.59 28.07 21" />
        <path d="M22,30H20V25a5,5,0,0,0-5-5H9a5,5,0,0,0-5,5v5H2V25a7,7,0,0,1,7-7h6a7,7,0,0,1,7,7Z" />
        <path d="M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z" />
        <rect
          id="_Transparent_Rectangle_"
          data-name="&lt;Transparent Rectangle&gt;"
          style={{ fill: "none" }}
          width="32"
          height="32"
        />
      </svg>
    </div>
  )
}

RoleIcon.propTypes = {
  className: PropTypes.string
}

export default RoleIcon
