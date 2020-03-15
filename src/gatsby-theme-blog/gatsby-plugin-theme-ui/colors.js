import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const soft = `rgb(113, 89, 170)`
const hard = 'rgb(113, 89, 193)'

export default merge(defaultThemeColors, {
    primary: hard,
    modes: {
        dark: {
            primary: soft,
        },
    },
})