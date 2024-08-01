import { CalendarFilled } from "@ant-design/icons"
import { Timeline, Typography } from "antd"
import dayjs from "dayjs"

const EduExpoItem = ({title,data}:any) => {
    const timelineData = data?.map((d:any,i:number)=> {
        return {
            children:<div className="white">
            <div><CalendarFilled /> {(d?.startDate ? dayjs(d?.startDate)?.format("MMM DD, YYYY") +" - " : "")+  dayjs(d?.startDate)?.format("MMM DD, YYYY")} </div>
            <Typography.Title level={4}>{d?.title}</Typography.Title>
            {d?.description && <div><i>{d?.description}</i></div>}
        </div>
        }
    })
  return (
    <div className="primary">
        <Typography.Title className="uppercase" style={{marginBottom:50}} level={3}>{title}</Typography.Title>
        <Timeline items={timelineData} />
    </div>
  )
}

export default EduExpoItem