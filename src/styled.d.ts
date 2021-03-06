import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor?: stinrg;
        colors?: {
            color1: string,
            color2: string,
            color3: string,
            color4: string,
            color5: string,
        };
    }
}