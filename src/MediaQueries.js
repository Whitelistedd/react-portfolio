import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 871px) {
            ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
    `
}

export const devices = {
    mobile: 871,
    tablet: 1200
}