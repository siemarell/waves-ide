import React from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';

export default (props: SvgIconProps) => (
    <SvgIcon viewBox="0 0 100 24" style={{width: 170}} {...props}>
        <g fill="none" fillRule="evenodd">
            <path fill="#D8D8D8" fillOpacity="0" d="M0 0h88.595v20.8H0z"/>
            <path fill="#1F5AF6" d="M83.929.905l4.699 4.699L83.83 10.4l-4.698-4.699z"/>
            <g fill="#000" fillRule="nonzero">
                <path
                    d="M20.666 5.937H18.06l-.273.249-2.675 9.59h-.017l-2.998-9.59-.273-.25H9.098l-.273.25-2.981 9.538-.051-.036-.017-.018L3.1 6.186l-.273-.25H.17l-.17.25 4.174 13.506.29.266h2.624l.29-.266 2.98-9.663h.069l2.999 9.663.29.266h2.657l.29-.266 4.174-13.506zM50.158 5.937h-2.623l-.29.249-3.663 9.982-.034.018-3.63-10-.289-.25h-2.675l-.17.25 5.23 13.506.307.266h2.42l.306-.266L50.33 6.186zM63.686 13.695l.256-.25v-.408c0-2.189-.597-4.075-1.772-5.392-1.176-1.317-2.76-1.993-4.702-1.993-1.875 0-3.442.73-4.652 2.153-1.21 1.424-1.806 3.15-1.806 5.107 0 2.082.63 3.826 1.874 5.196 1.244 1.37 2.88 2.064 4.856 2.064 1.431 0 2.658-.356 3.646-1.085.988-.712 2.028-1.887 2.385-3.488l-.187-.267h-2.453l-.341.267c-.614 1.281-1.55 1.886-3.101 1.886-1.005 0-1.908-.374-2.658-1.103-.715-.694-1.124-1.53-1.227-2.723l9.882.036zm-9.711-2.491C54.4 9.549 55.73 8.32 57.468 8.32c2.3 0 3.254 1.708 3.526 2.883h-7.02zM32.525 5.937l-.256.267v1.388l-.051.053a4.8 4.8 0 0 0-1.738-1.423c-.733-.374-1.567-.552-2.47-.552-1.687 0-3.17.712-4.396 2.1-1.227 1.388-1.84 3.131-1.84 5.178 0 2.046.613 3.79 1.84 5.178s2.709 2.1 4.396 2.1c.903 0 1.72-.179 2.453-.552.136-.071.29-.143.426-.232.528-.338.971-.711 1.312-1.156.017-.018.068.018.085 0v1.441l.256.267h2.232l.255-.267V6.186l-.255-.267h-2.25v.018zm-1.38 10.356c-.75.836-1.653 1.245-2.743 1.245-1.057 0-1.84-.409-2.607-1.263-.767-.836-1.142-1.957-1.142-3.363 0-1.388.392-2.509 1.142-3.363.766-.836 1.533-1.263 2.607-1.263 1.073 0 1.976.409 2.743 1.245.494.552.817 1.21 1.005 2.01v2.706c-.17.836-.511 1.512-1.005 2.046zM73.142 11.844s-1.465-.32-2.675-.605c-1.107-.266-1.67-.605-1.67-1.423 0-.872.801-1.602 2.522-1.602 1.687 0 2.624.783 2.624 1.477l.29.267h2.453l.187-.249c0-1.833-1.516-4.021-5.486-4.021-4.14 0-5.435 2.544-5.435 4.181 0 1.37.477 2.99 3.646 3.755l2.726.64c1.38.32 1.96.819 1.96 1.655 0 .765-.733 1.69-2.641 1.69-1.772 0-2.846-.889-2.897-1.939l-.306-.267h-2.505l-.187.267c.221 2.349 1.89 4.555 5.878 4.555 4.515 0 5.435-2.882 5.435-4.395 0-2.028-1.108-3.345-3.919-3.986z"/>
            </g>
            <path fill="#9BA6B2"
                  d="M100.247 14.248h-3.34V20h-1.885V5.781h4.707c1.602 0 2.834.365 3.697 1.094.862.73 1.294 1.79 1.294 3.184 0 .885-.24 1.656-.718 2.314-.479.658-1.144 1.15-1.997 1.475l3.34 6.035V20h-2.012l-3.086-5.752zm-3.34-1.533h2.881c.931 0 1.672-.241 2.222-.723s.825-1.126.825-1.933c0-.88-.262-1.553-.786-2.022-.524-.469-1.281-.706-2.27-.713h-2.872v5.39zM109.358 20h-1.875V5.781h1.875V20zm3.428 0V5.781h4.014c1.237 0 2.33.274 3.281.82.95.547 1.685 1.325 2.202 2.335.518 1.009.78 2.168.786 3.476v.908c0 1.341-.258 2.517-.776 3.526a5.461 5.461 0 0 1-2.217 2.324c-.96.54-2.078.817-3.354.83h-3.936zm1.875-12.676v11.143h1.973c1.445 0 2.57-.45 3.374-1.348.804-.898 1.206-2.178 1.206-3.838v-.83c0-1.614-.38-2.87-1.138-3.764-.758-.896-1.834-1.35-3.227-1.363h-2.188zm19.277 6.104h-6.162v5.039h7.159V20H125.9V5.781h8.936v1.543h-7.06v4.57h6.161v1.534z"/>
        </g>
    </SvgIcon>
)