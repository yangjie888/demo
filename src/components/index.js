
import HelloWorld from './HelloWorld'
import ComOne from './ComOne'
const components = [
  HelloWorld,
  ComOne
]

const install = (Vue, opts = {}) => {
  components.map(component => Vue.component(component.name, component))
}
export default install
