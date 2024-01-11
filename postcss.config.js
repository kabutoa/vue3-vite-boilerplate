import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import mixins from 'postcss-mixins'

export default {
  plugins: [mixins(), nested(), autoprefixer()]
}
