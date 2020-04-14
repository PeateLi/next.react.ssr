
import fetch from 'isomorphic-fetch'
// import { classNames, stylesheet } from './style/index.scss'
class Index extends React.Component {
    static async getInitialProps({res }) {
        const response = await fetch('http://192.168.123.189:8081/Utmel/Scheduler/GetSchedule?page=1&limit=10')
        const postList = await response.json()
        return { postList }// 这里绑定userAgent数据到Props,组件里就可以用 this.props.userAgent访问到了
    }
    constructor(props) {
        super(props)
      }
      componentDidMount(){
      }
      render() {
        return (
          <div>
            {this.props.postList.data.resultList.map(x => {
                return (
                    <ul key={x.jobName}>
                        <li>{x.ip}</li>
                        <li>{x.jobName}</li>
                        <li>{x.previousFireDate}</li>
                        <li>{x.previousSuccessStr}</li>
                    </ul>
                )
            })}
            <style jsx>{`
                ul{
                    height: 20px;
                }
                ul li {
                    list-style: none;
                    float: left;
                    padding: 5px 10px;
                }
                `}</style>
          </div>
        );
      }
    
      componentDidMount() {
        document.title = "首页"
      }
    }

export default Index