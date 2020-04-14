/**
 * Created by jiang on 2018/6/26.
 */
import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
)

export default Layout