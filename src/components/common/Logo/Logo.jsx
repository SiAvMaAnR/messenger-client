import PropTypes from 'prop-types'
import './Logo.scss'

function Logo({ className }) {
  return (
    <div className={`c-logo ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="53"
        viewBox="0 0 34 53"
        fill="none"
      >
        <path
          d="M7.83813 41.5713C13.7147 45.573 17.0842 46.8706 18.0344 46.9777V47.5485C15.14 46.8014 10.0309 43.2524 7.83813 41.5713Z"
          fill="url(#paint0_linear_40_43)"
        />
        <path
          d="M1.58879 36.9015C3.51841 35.8555 5.75501 30.9242 6.63211 28.5894C6.28127 31.3538 5.24337 33.7883 4.76828 34.66C4.32973 35.8742 2.46588 37.6487 1.47914 38.4892C0.689749 39.1617 0.780593 39.9731 1.47914 40.6373C5.25067 44.2237 14.0875 49.4787 18.0344 51.6579V52.3117C14.4383 50.8921 5.02834 44.6428 0.93096 41.2911C-0.0149895 40.5334 -0.823241 38.209 1.58879 36.9015Z"
          fill="url(#paint1_linear_40_43)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1706 15.8876C14.526 16.2923 11.215 17.9236 11.1273 21.2111C11.9678 21.4913 13.5393 22.5374 13.1007 24.48C13.3931 25.5384 14.1283 27.1884 13.8682 27.8422C13.8606 27.8613 13.8103 27.9147 13.7356 28.0008C13.1415 28.5789 9.93464 32.3816 12.114 34.66C14.2194 36.8611 15.573 36.2159 16.9039 35.5815C17.0977 35.4891 17.2536 35.4218 17.4862 35.3138C17.7463 35.193 18.0783 34.137 17.8152 33.9129C17.7367 33.846 17.6208 33.7048 17.472 33.5234C16.9968 32.9444 16.1857 31.9559 15.1839 31.6714C15.1839 31.4223 15.3812 30.9989 16.1706 31.2978C16.96 31.5967 17.3766 31.3601 17.4862 31.2044C17.6324 31.1421 17.9467 31.0363 18.0344 31.111V36.9015H14.7453C15.5347 37.4992 17.267 37.5864 18.0344 37.5553V40.2637C17.5959 40.712 15.0742 39.5166 13.8682 38.8628C15.5347 40.5813 17.3401 41.1354 18.0344 41.1977V42.5986C16.5434 42.5239 12.0451 40.1598 11.1273 38.8628L10.908 37.3685C10.5777 37.0871 10.2869 36.8202 10.0309 36.5691V39.0496C10.1813 39.8901 11.807 41.2537 18.0344 43.7193V44.7467C15.2569 43.6259 9.52348 40.907 8.82487 39.7034L8.60559 39.2259C8.60559 39.2259 8.53674 38.8523 8.53674 38.6655C8.53674 38.4787 8.53674 37.9184 8.60559 37.6487C8.67445 37.379 9.03737 36.6774 9.62511 36.1544C9.28644 35.7928 9.17599 35.6717 8.97529 35.3967C8.28883 36.0349 8.09819 36.3411 7.55 37.358C7.00181 38.3749 7.61885 39.7034 7.61885 39.7034C7.65964 40.0665 11.7193 43.1216 18.0344 45.5872V46.4278C14.526 44.8401 7.83813 41.3243 6.96103 39.8901C6.74175 39.5477 6.23435 38.5721 7.00181 37.0778L7.44036 36.424L8.60559 34.8796C8.36436 34.5098 8.25296 34.2585 8.20359 34.1472C8.1747 34.082 8.16704 34.0648 8.16704 34.0997C8.16704 34.2491 7.55 35.4901 7.07067 36.061C6.56326 36.9844 4.26087 38.2919 7.07067 41.5713C9.54247 44.4561 15.2246 47.3513 18.0344 48.5654V49.2478C7.33073 44.3626 5.24761 41.374 4.76828 39.8901C4.49674 39.0496 4.26087 38.1986 5.4261 36.7147C6.82835 34.9291 7.18454 34.2448 7.44036 33.342C7.44036 27.9209 7.5296 27.5888 7.59977 27.5158C7.61181 27.5033 7.61885 27.496 7.61885 27.4686C7.61885 27.3192 9.0076 25.2271 9.70197 24.1998C9.64245 23.3379 9.84142 22.7237 10.0182 22.1779C10.1671 21.7183 10.3003 21.3072 10.2502 20.8376C10.1405 19.8102 8.71523 16.448 5.75501 13.2726C3.38684 10.7322 1.44603 7.28481 1.15024 5.80097C0.492414 2.50102 0.60427 -2.79494 6.96103 1.78499C12.703 5.92194 15.1839 12.7745 15.4031 15.3273L16.1706 15.8876ZM12.4429 35.7808C11.7704 35.7496 9.63312 34.3694 9.62511 33.9129L9.70197 30.5506C9.70197 29.6062 9.85546 30.0837 10.0309 24.48C10.4694 24.729 10.6199 24.6563 12.0044 25.4139V27.1884C12.0044 27.9585 10.0717 30.727 10.1405 31.2044V33.8195C10.2909 34.4628 11.3027 35.2106 12.4429 35.7808ZM11.1493 13.8519C11.0122 14.4804 10.8867 15.0559 10.7983 15.5141C11.4123 10.2143 7.10721 3.84179 4.87791 1.31802C6.63211 1.6916 11.8947 7.69644 11.8947 8.04246C12.2688 8.71988 11.6362 11.6196 11.1493 13.8519ZM10.5791 22.7989C11.2808 22.7989 11.3831 23.4838 11.3465 23.8262H10.7983C10.4006 23.8157 9.70197 22.7989 10.5791 22.7989Z"
          fill="url(#paint2_linear_40_43)"
        />
        <path
          d="M26.1619 41.5713C20.2853 45.573 16.9158 46.8706 15.9656 46.9777V47.5485C18.86 46.8014 23.9691 43.2524 26.1619 41.5713Z"
          fill="url(#paint3_linear_40_43)"
        />
        <path
          d="M32.4112 36.9015C30.4816 35.8555 28.245 30.9242 27.3679 28.5894C27.7187 31.3538 28.7566 33.7883 29.2317 34.66C29.6703 35.8742 31.5341 37.6487 32.5209 38.4892C33.3103 39.1617 33.2194 39.9731 32.5209 40.6373C28.7493 44.2237 19.9125 49.4787 15.9656 51.6579V52.3117C19.5617 50.8921 28.9717 44.6428 33.069 41.2911C34.015 40.5334 34.8232 38.209 32.4112 36.9015Z"
          fill="url(#paint4_linear_40_43)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8294 15.8876C19.474 16.2923 22.785 17.9236 22.8727 21.2111C22.0322 21.4913 20.4607 22.5374 20.8993 24.48C20.6069 25.5384 19.8717 27.1884 20.1318 27.8422C20.1394 27.8613 20.1897 27.9147 20.2644 28.0008C20.8585 28.5789 24.0654 32.3816 21.886 34.66C19.7806 36.8611 18.427 36.2159 17.0961 35.5815C16.9023 35.4891 16.7464 35.4218 16.5138 35.3138C16.2537 35.193 15.9217 34.137 16.1848 33.9129C16.2633 33.846 16.3792 33.7048 16.528 33.5234C17.0032 32.9444 17.8143 31.9559 18.8161 31.6714C18.8161 31.4223 18.6188 30.9989 17.8294 31.2978C17.04 31.5967 16.6234 31.3601 16.5138 31.2044C16.3676 31.1421 16.0533 31.0363 15.9656 31.111V36.9015H19.2547C18.4653 37.4992 16.733 37.5864 15.9656 37.5553V40.2637C16.4041 40.712 18.9258 39.5166 20.1318 38.8628C18.4653 40.5813 16.6599 41.1354 15.9656 41.1977V42.5986C17.4566 42.5239 21.9549 40.1598 22.8727 38.8628L23.092 37.3685C23.4223 37.0871 23.7131 36.8202 23.9691 36.5691V39.0496C23.8187 39.8901 22.193 41.2537 15.9656 43.7193V44.7467C18.7431 43.6259 24.4765 40.907 25.1751 39.7034L25.3944 39.2259C25.3944 39.2259 25.4633 38.8523 25.4633 38.6655C25.4633 38.4787 25.4633 37.9184 25.3944 37.6487C25.3256 37.379 24.9626 36.6774 24.3749 36.1544C24.7136 35.7928 24.824 35.6717 25.0247 35.3967C25.7112 36.0349 25.9018 36.3411 26.45 37.358C26.9982 38.3749 26.3811 39.7034 26.3811 39.7034C26.3404 40.0665 22.2807 43.1216 15.9656 45.5872V46.4278C19.474 44.8401 26.1619 41.3243 27.039 39.8901C27.2582 39.5477 27.7657 38.5721 26.9982 37.0778L26.5596 36.424L25.3944 34.8796C25.6356 34.5098 25.747 34.2585 25.7964 34.1472C25.8253 34.082 25.833 34.0648 25.833 34.0997C25.833 34.2491 26.45 35.4901 26.9293 36.061C27.4367 36.9844 29.7391 38.2919 26.9293 41.5713C24.4575 44.4561 18.7754 47.3513 15.9656 48.5654V49.2478C26.6693 44.3626 28.7524 41.374 29.2317 39.8901C29.5033 39.0496 29.7391 38.1986 28.5739 36.7147C27.1717 34.9291 26.8155 34.2448 26.5596 33.342C26.5596 27.9209 26.4704 27.5888 26.4002 27.5158C26.3882 27.5033 26.3811 27.496 26.3811 27.4686C26.3811 27.3192 24.9924 25.2271 24.298 24.1998C24.3575 23.3379 24.1586 22.7237 23.9818 22.1779C23.8329 21.7183 23.6997 21.3072 23.7498 20.8376C23.8595 19.8102 25.2848 16.448 28.245 13.2726C30.6132 10.7322 32.554 7.28481 32.8498 5.80097C33.5076 2.50102 33.3957 -2.79494 27.039 1.78499C21.297 5.92194 18.8161 12.7745 18.5969 15.3273L17.8294 15.8876ZM21.5571 35.7808C22.2296 35.7496 24.3669 34.3694 24.3749 33.9129L24.298 30.5506C24.298 29.6062 24.1445 30.0837 23.9691 24.48C23.5306 24.729 23.3801 24.6563 21.9956 25.4139V27.1884C21.9956 27.9585 23.9283 30.727 23.8595 31.2044V33.8195C23.7091 34.4628 22.6973 35.2106 21.5571 35.7808ZM22.8507 13.8519C22.9878 14.4804 23.1133 15.0559 23.2017 15.5141C22.5877 10.2143 26.8928 3.84179 29.1221 1.31802C27.3679 1.6916 22.1053 7.69644 22.1053 8.04246C21.7312 8.71988 22.3638 11.6196 22.8507 13.8519ZM23.4209 22.7989C22.7192 22.7989 22.6169 23.4838 22.6535 23.8262H23.2017C23.5994 23.8157 24.298 22.7989 23.4209 22.7989Z"
          fill="url(#paint5_linear_40_43)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_40_43"
            x1="9.01721"
            y1="0"
            x2="11.282"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_40_43"
            x1="9.01721"
            y1="0"
            x2="11.282"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_40_43"
            x1="9.01721"
            y1="0"
            x2="11.282"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_40_43"
            x1="24.9828"
            y1="0"
            x2="22.718"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_40_43"
            x1="24.9828"
            y1="0"
            x2="22.718"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_40_43"
            x1="24.9828"
            y1="0"
            x2="22.718"
            y2="55.2727"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8D61B4" />
            <stop offset="0.520894" stopColor="#8B61B4" />
            <stop offset="1" stopColor="#8D61B4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

Logo.defaultProps = {
  className: ''
}

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
