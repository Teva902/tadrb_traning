import * as React from "react"
import Svg, { Path } from "react-native-svg"
const emailIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#ABABAB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.166 17.083H5.833c-2.5 0-4.167-1.25-4.167-4.166V7.083c0-2.916 1.667-4.166 4.167-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166Z"
    />
    <Path
      stroke="#ABABAB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.167 7.5-2.608 2.083c-.859.684-2.267.684-3.126 0L5.833 7.5"
    />
  </Svg>
)
export default emailIcon
