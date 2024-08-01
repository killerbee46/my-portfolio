import { Card, Image, Modal, Tag, Typography } from "antd"
import { projects } from "../../utils/projects"
import { useState } from "react"
import Ribbon from "antd/es/badge/Ribbon"
import { colors } from "../../themes/colors"

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
    <div style={{height:'100%'}}>
        <Ribbon style={{background:'transparent'}} text={<Status />}>
        <div className="white bg-black">
        <Card className="group/item" style={{background:'#1282ae10', position:'relative', border:"1px solid grey"}} hoverable onClick={()=>modalHandler(data?.id)} cover={<Image style={{padding:20}} src={data?.cover} preview={false} alt="project_img" height={200} />}>
        {/* <div className="hidden invisible group-hover/item:visible  absolute top-0 bottom-0 left-0 right-0 z-10 bg-black/60" style={{position:'absolute', top:0, bottom:0, left:0, right:0, zIndex:10, background:'black', opacity:.4}} /> */}
        <div style={{position:'absolute', bottom:0, left:0, right:0, textAlign:'center'}}>
        <Typography.Title level={5} className="text-center" style={{height:50}}>{data?.name}</Typography.Title>
        </div>
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
        </Ribbon>
    </div>
  )
}

export default ProjectCard