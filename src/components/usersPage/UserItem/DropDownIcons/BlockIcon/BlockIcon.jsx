import PropTypes from 'prop-types'
import './BlockIcon.scss'

function BlockIcon({ className }) {
  return (
    <div className={`c-block-icon ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>blocked</title>
        <path d="M16 29c-7.179 0-13-5.82-13-13s5.821-13 13-13c7.18 0 13 5.82 13 13s-5.82 13-13 13zM16 26c2.211 0 4.249-0.727 5.905-1.941l-13.963-13.962c-1.216 1.655-1.942 3.692-1.942 5.903 0 5.522 4.477 10 10 10zM16 6c-2.228 0-4.279 0.737-5.941 1.97l13.971 13.972c1.232-1.663 1.97-3.713 1.97-5.942 0-5.523-4.477-10-10-10z" />
      </svg>
    </div>
  )
}

BlockIcon.defaultProps = {
  className: ''
}

BlockIcon.propTypes = {
  className: PropTypes.string
}

export default BlockIcon