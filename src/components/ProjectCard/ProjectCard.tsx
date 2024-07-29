import { Card, Image, Modal, Tag, Typography } from "antd"
import { projects } from "../../utils/projects"
import { useState } from "react"

const ProjectCard = ({data}:any) => {
    const isOnline = data?.path && data?.path !== ""
    const [projectModal, setProjectModal] = useState({
        visible:false,
        projectId:0
    })
    const projectDetail = projects?.find((f)=> f.id === projectModal?.projectId)
    const modalHandler = (id?:number) => {
        if (id && id !== 0) {
            setProjectModal({
                visible:true,
                projectId:id
            })
        } else {
            setProjectModal({
                visible:false,
                projectId:0
            })
        }
    }

    const Status = () => {
        return <div>{
            isOnline ?
            <a href={data?.path} target="_black">
                <Tag color="green" style={{color:'black', display:'flex', width:'fit-content', gap:5, alignItems:'center'}}>Online <div style={{borderRadius:'50%', height:10, width:10, background:'green'}} /></Tag>
            </a>:
            <Tag color="red" style={{color:'black', display:'flex', width:'fit-content', gap:5, alignItems:'center'}}>Not Online <div style={{borderRadius:'50%', height:10, width:10, background:'red'}} /></Tag>
        }
        </div>
    }
  return (
    <div className="black" style={{height:'100%'}}>
        <Card style={{height:'100%'}} hoverable onClick={()=>modalHandler(data?.id)} cover={<Image src={data?.cover} preview={false} alt="project_img" height={100} />}>
        <Typography.Title level={5} className="text-center" style={{height:50}}>{data?.name}</Typography.Title>
        <Status />
        </Card>
        <Modal open={projectModal?.visible} footer={null} onCancel={()=>modalHandler()} style={{textAlign:'center'}}>
            <Image preview={false} src={projectDetail?.cover} width={'20%'} />
            <Typography.Title level={4}>{projectDetail?.name}</Typography.Title>
            <Typography.Paragraph className="text-justify">{projectDetail?.description}</Typography.Paragraph>
            <div>
            <Status />
            </div>
        </Modal>
    </div>
  )
}

export default ProjectCard