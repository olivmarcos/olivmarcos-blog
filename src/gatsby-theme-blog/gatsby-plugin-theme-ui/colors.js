import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const softYellow = `#FFCC63`
const hardYellow = '#F2AC29'

export default merge(defaultThemeColors, {
  primary: hardYellow,
  modes: {
    dark: {
      primary: softYellow,
    },
  },
})
