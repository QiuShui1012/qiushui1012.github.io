// This file is provided by Gugle's Blog in ISC License.
// Original file link below:
// https://github.com/Gu-ZT/gu-zt.github.io/blob/main/docs/.vitepress/theme/components/MagicCodeGroup.vue
// License link below:
// https://www.isc.org/
export interface CodeFileData {
    code: string;
    lines: number;
    lang: string;
    lineNumbers: boolean;
    lineStart: number;
    name: string;
    highlightLines?: number[];
    focusedLines?: number[];
    diffAddLines?: number[];
    diffReduceLines?: number[];
    warningLines?: number[];
    errorLines?: number[];
}
