import * as React from "react"
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={234}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M43.76 33.384c-.512-.939-1.216-1.653-2.112-2.144-.896-.49-1.941-.736-3.136-.736-1.323 0-2.496.299-3.52.896s-1.824 1.45-2.4 2.56c-.576 1.11-.864 2.39-.864 3.84 0 1.493.288 2.795.864 3.904.597 1.11 1.419 1.963 2.464 2.56s2.261.896 3.648.896c1.707 0 3.104-.448 4.192-1.344 1.088-.917 1.803-2.187 2.144-3.808h-7.68v-3.424h12.096v3.904c-.299 1.557-.939 2.997-1.92 4.32-.981 1.323-2.25 2.39-3.808 3.2-1.536.79-3.264 1.184-5.184 1.184-2.155 0-4.107-.48-5.856-1.44a10.857 10.857 0 0 1-4.096-4.064c-.981-1.728-1.472-3.69-1.472-5.888 0-2.197.49-4.16 1.472-5.888 1.003-1.75 2.368-3.104 4.096-4.064 1.75-.981 3.69-1.472 5.824-1.472 2.517 0 4.704.619 6.56 1.856 1.856 1.216 3.136 2.933 3.84 5.152H43.76Zm7.858 6.688c0-1.792.352-3.381 1.056-4.768.726-1.387 1.697-2.453 2.913-3.2 1.237-.747 2.613-1.12 4.127-1.12 1.323 0 2.475.267 3.456.8 1.003.533 1.803 1.205 2.4 2.016v-2.528h4.513V49H65.57v-2.592c-.575.832-1.375 1.525-2.4 2.08-1.002.533-2.165.8-3.488.8-1.493 0-2.858-.384-4.096-1.152-1.215-.768-2.186-1.845-2.911-3.232-.704-1.408-1.056-3.019-1.056-4.832Zm13.952.064c0-1.088-.213-2.016-.64-2.784-.426-.79-1.002-1.387-1.728-1.792a4.53 4.53 0 0 0-2.335-.64c-.832 0-1.6.203-2.304.608-.705.405-1.28 1.003-1.729 1.792-.426.768-.64 1.685-.64 2.752 0 1.067.214 2.005.64 2.816.448.79 1.024 1.397 1.728 1.824.726.427 1.494.64 2.305.64.832 0 1.61-.203 2.336-.608a4.656 4.656 0 0 0 1.727-1.792c.427-.79.64-1.728.64-2.816Zm30.904-9.12c2.176 0 3.925.672 5.248 2.016 1.344 1.323 2.016 3.179 2.016 5.568V49h-4.48v-9.792c0-1.387-.352-2.443-1.056-3.168-.704-.747-1.664-1.12-2.88-1.12s-2.187.373-2.912 1.12c-.704.725-1.056 1.781-1.056 3.168V49h-4.48v-9.792c0-1.387-.352-2.443-1.056-3.168-.704-.747-1.664-1.12-2.88-1.12-1.237 0-2.219.373-2.944 1.12-.704.725-1.056 1.781-1.056 3.168V49h-4.48V31.272h4.48v2.144a5.992 5.992 0 0 1 2.208-1.76c.917-.427 1.92-.64 3.008-.64 1.387 0 2.624.299 3.712.896a6.066 6.066 0 0 1 2.528 2.496c.576-1.024 1.408-1.845 2.496-2.464a7.24 7.24 0 0 1 3.584-.928Zm27.995 8.736a10.5 10.5 0 0 1-.128 1.728h-12.96c.107 1.28.555 2.283 1.344 3.008.79.725 1.76 1.088 2.912 1.088 1.664 0 2.848-.715 3.552-2.144h4.832c-.512 1.707-1.493 3.115-2.944 4.224-1.45 1.088-3.232 1.632-5.344 1.632-1.706 0-3.242-.373-4.608-1.12-1.344-.768-2.4-1.845-3.168-3.232-.746-1.387-1.12-2.987-1.12-4.8 0-1.835.374-3.445 1.12-4.832.747-1.387 1.792-2.453 3.136-3.2 1.344-.747 2.891-1.12 4.64-1.12 1.686 0 3.19.363 4.512 1.088a7.503 7.503 0 0 1 3.104 3.104c.747 1.323 1.12 2.848 1.12 4.576Zm-4.64-1.28c-.021-1.152-.437-2.07-1.248-2.752-.81-.704-1.802-1.056-2.976-1.056-1.109 0-2.048.341-2.816 1.024-.746.661-1.205 1.59-1.376 2.784h8.416Zm14.694 10.816c-1.45 0-2.752-.256-3.904-.768-1.152-.533-2.069-1.248-2.752-2.144a5.458 5.458 0 0 1-1.088-2.976h4.512c.086.683.416 1.248.992 1.696.598.448 1.334.672 2.208.672.854 0 1.515-.17 1.984-.512.491-.341.736-.779.736-1.312 0-.576-.298-1.003-.896-1.28-.576-.299-1.504-.619-2.784-.96-1.322-.32-2.41-.65-3.264-.992a5.805 5.805 0 0 1-2.176-1.568c-.597-.704-.896-1.653-.896-2.848 0-.981.278-1.877.832-2.688.576-.81 1.387-1.45 2.432-1.92 1.067-.47 2.315-.704 3.744-.704 2.112 0 3.798.533 5.056 1.6 1.259 1.045 1.952 2.464 2.08 4.256h-4.288c-.064-.704-.362-1.259-.896-1.664-.512-.427-1.205-.64-2.08-.64-.81 0-1.44.15-1.888.448-.426.299-.64.715-.64 1.248 0 .597.299 1.056.896 1.376.598.299 1.526.608 2.784.928 1.28.32 2.336.65 3.168.992a5.404 5.404 0 0 1 2.144 1.6c.619.704.939 1.643.96 2.816a4.636 4.636 0 0 1-.864 2.752c-.554.81-1.365 1.45-2.432 1.92-1.045.448-2.272.672-3.68.672Zm9.95-4.832v-3.52l10.464-14.976h5.216v14.592h2.816v3.904h-2.816V49h-4.48v-4.544h-11.2Zm11.488-13.696-6.56 9.792h6.56V30.76Zm24.164-4.096v3.616h-9.312v5.728h7.136v3.552h-7.136V49h-4.48V26.664h13.792Zm7.657 7.36a6.335 6.335 0 0 1 2.24-2.208c.938-.533 2.005-.8 3.2-.8v4.704h-1.184c-1.408 0-2.475.33-3.2.992-.704.661-1.056 1.813-1.056 3.456V49h-4.48V31.272h4.48v2.752Zm24.937 5.728a10.5 10.5 0 0 1-.128 1.728h-12.96c.107 1.28.555 2.283 1.344 3.008.79.725 1.76 1.088 2.912 1.088 1.664 0 2.848-.715 3.552-2.144h4.832c-.512 1.707-1.493 3.115-2.944 4.224-1.45 1.088-3.232 1.632-5.344 1.632-1.706 0-3.242-.373-4.608-1.12-1.344-.768-2.4-1.845-3.168-3.232-.746-1.387-1.12-2.987-1.12-4.8 0-1.835.374-3.445 1.12-4.832.747-1.387 1.792-2.453 3.136-3.2 1.344-.747 2.891-1.12 4.64-1.12 1.686 0 3.19.363 4.512 1.088a7.503 7.503 0 0 1 3.104 3.104c.747 1.323 1.12 2.848 1.12 4.576Zm-4.64-1.28c-.021-1.152-.437-2.07-1.248-2.752-.81-.704-1.802-1.056-2.976-1.056-1.109 0-2.048.341-2.816 1.024-.746.661-1.205 1.59-1.376 2.784h8.416Zm24.39 1.28a10.5 10.5 0 0 1-.128 1.728h-12.96c.107 1.28.555 2.283 1.344 3.008.79.725 1.76 1.088 2.912 1.088 1.664 0 2.848-.715 3.552-2.144h4.832c-.512 1.707-1.493 3.115-2.944 4.224-1.45 1.088-3.232 1.632-5.344 1.632-1.706 0-3.242-.373-4.608-1.12-1.344-.768-2.4-1.845-3.168-3.232-.746-1.387-1.12-2.987-1.12-4.8 0-1.835.374-3.445 1.12-4.832.747-1.387 1.792-2.453 3.136-3.2 1.344-.747 2.891-1.12 4.64-1.12 1.686 0 3.19.363 4.512 1.088a7.503 7.503 0 0 1 3.104 3.104c.747 1.323 1.12 2.848 1.12 4.576Zm-4.64-1.28c-.021-1.152-.437-2.07-1.248-2.752-.81-.704-1.802-1.056-2.976-1.056-1.109 0-2.048.341-2.816 1.024-.746.661-1.205 1.59-1.376 2.784h8.416Z"
    />
    <g clipPath="url(#a)">
      <path
        fill="#262626"
        d="m37.64 9.227.091-.03a.893.893 0 0 1 .754.092c5.162 2.694 10.026 10.637 11.477 16.548.402 1.639.552 3.147.385 4.378-.189 1.404-.775 2.477-1.84 3.06-1.358.745-3.417.578-6.32-.919-.373-.19-.758-.382-1.152-.578-1.342-.662-2.756-1.36-4.076-2.33l-15.781 5.207c-.484 1.575-1.205 2.978-1.893 4.31-.198.387-.395.766-.58 1.138-1.442 2.93-2.997 4.289-4.53 4.499-1.205.165-2.318-.348-3.301-1.365-.868-.893-1.644-2.191-2.296-3.748-2.36-5.641-3.173-14.976-.59-20.2a.88.88 0 0 1 .519-.451l-.002-.003.095-.032a6.151 6.151 0 0 1 1.211-2.152 6.9 6.9 0 0 1 3.056-2.012c1.172-.386 2.447-.474 3.653-.201a6.013 6.013 0 0 1 2.243 1.009l2.672-.881c-1.869-4.972-.886-6.705 1.138-7.53.733-.298 1.57-.428 2.447-.563 1.656-.258 3.487-.544 4.313-2.184a.889.889 0 0 1 1.196-.394c.44.222.616.755.394 1.196-1.234 2.456-3.54 2.815-5.623 3.14-.773.12-1.507.234-2.06.454-1.093.443-1.529 1.62-.112 5.326l4.347-1.434a6.09 6.09 0 0 1 1.208-2.152 6.897 6.897 0 0 1 3.052-2.01 6.932 6.932 0 0 1 3.65-.2c.797.179 1.565.51 2.255 1.012Z"
      />
      <path
        fill="#000"
        d="M34.788 13.104a2.93 2.93 0 0 1 1.303 3.949l-.003.004a2.928 2.928 0 0 1-3.945 1.302l-.004-.002a2.929 2.929 0 0 1-1.303-3.949 2.94 2.94 0 0 1 3.949-1.303h.003Z"
      />
      <path
        fill="#FFD54F"
        d="M34.306 14.061a1.868 1.868 0 0 1 .829 2.513 1.868 1.868 0 0 1-2.513.83 1.868 1.868 0 0 1-.83-2.514 1.88 1.88 0 0 1 2.514-.829Z"
      />
      <path
        fill="#000"
        d="M31.744 18.217c.032.016.06.033.088.05a2.929 2.929 0 0 1 1.215 3.899l-.002.004.004.002a2.93 2.93 0 0 1-1.705 1.473 2.93 2.93 0 0 1-2.247-.169 2.93 2.93 0 0 1-1.473-1.705 2.93 2.93 0 0 1 .17-2.247l.002-.004c.015-.032.032-.06.048-.091a2.94 2.94 0 0 1 3.897-1.21l.003-.002Z"
      />
      <path
        fill="#2196F3"
        d="M31.262 19.174a1.868 1.868 0 0 1 .83 2.513 1.868 1.868 0 0 1-2.514.83 1.868 1.868 0 0 1-.829-2.514 1.874 1.874 0 0 1 2.513-.83Z"
      />
      <path
        fill="#000"
        d="M40.273 15.403a2.93 2.93 0 0 1 1.473 1.706 2.93 2.93 0 0 1-.169 2.246 2.93 2.93 0 0 1-3.949 1.303l-.004-.002-.003.004a2.93 2.93 0 0 1-1.472-1.705 2.93 2.93 0 0 1 .169-2.247 2.93 2.93 0 0 1 1.705-1.472 2.954 2.954 0 0 1 2.25.167Z"
      />
      <path
        fill="#F44336"
        d="M39.791 16.36a1.868 1.868 0 0 1 .83 2.513 1.868 1.868 0 0 1-2.514.83 1.868 1.868 0 0 1-.829-2.514 1.874 1.874 0 0 1 2.513-.829Z"
      />
      <path
        fill="#000"
        d="M37.344 20.853a2.93 2.93 0 0 1 1.303 3.949l-.002.004.004.002a2.93 2.93 0 0 1-1.705 1.473 2.93 2.93 0 0 1-2.247-.169c-.031-.016-.06-.033-.088-.05a2.931 2.931 0 0 1-1.216-3.902.683.683 0 0 1 .05-.087 2.94 2.94 0 0 1 3.899-1.215l.003-.002v-.003Z"
      />
      <path
        fill="#4CAF50"
        d="M36.862 21.81a1.868 1.868 0 0 1 .83 2.513 1.868 1.868 0 0 1-2.514.829 1.868 1.868 0 0 1-.829-2.513 1.88 1.88 0 0 1 2.513-.83Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M14.801 20.537a2.033 2.033 0 0 1 2.56 1.29l.743 2.25 2.25-.743a2.033 2.033 0 0 1 2.56 1.29 2.033 2.033 0 0 1-1.29 2.561l-2.25.742.742 2.25a2.033 2.033 0 0 1-1.29 2.56 2.033 2.033 0 0 1-2.56-1.29l-.742-2.25-2.25.743a2.033 2.033 0 0 1-2.56-1.29 2.033 2.033 0 0 1 1.29-2.561l2.25-.742-.743-2.25a2.033 2.033 0 0 1 1.29-2.56Z"
        clipRule="evenodd"
      />
      <path
        fill="#262626"
        fillRule="evenodd"
        d="m22.063 24.984-.822 1.63-.81-2.451 1.631.821Zm-6.869-3.46 1.63.82-2.452.81.822-1.63Zm-3.457 6.867 1.63.821-.809-2.452-.821 1.63Zm6.864 3.458.821-1.63-2.452.809 1.63.821Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 13.693 41.507 0 52.11 32.143 10.604 45.836z" />
      </clipPath>
    </defs>
  </svg>
)
export default Logo