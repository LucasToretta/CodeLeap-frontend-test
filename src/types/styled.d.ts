import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string
            white: string
            black: string
            text: string
            border: string
            primary: string
            danger: string
            success: string
            overlay: string
            disabled: string
        }
    }
}