import Header from './Header'
import { Provider } from 'rebass'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <Provider>
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
    </Provider>
)

export default Layout