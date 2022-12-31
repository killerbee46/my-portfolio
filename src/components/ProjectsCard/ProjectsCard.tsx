import { Card, Tooltip, Typography } from 'antd'
import React from 'react'
import './ProjectCard.css'

const ProjectsCard = (props: any) => {
    const data = props?.project
    return (
        <div>
            {/* <Card>
                <Typography.Title level={4}>Project Name</Typography.Title>
                <Typography.Text>This is a short desc of project</Typography.Text>
            </Card> */}
            {
                data?.link && data?.link !== null || "" ?
                    <a href={data?.link} target={"_blank"}>
                        <figure className="snip0056">
                            <figcaption>
                                <h2><span>{data.title}</span></h2>
                                <p>{data?.desc}</p>
                            </figcaption><img src={data?.image} alt="sample8" />
                            <div className="position">{data?.status}</div>
                        </figure>
                    </a> :
                    <Tooltip title="Not available online">
                        <figure className="snip0056" style={{ cursor: 'pointer' }}>
                            <figcaption>
                                <h2><span>{data.title}</span></h2>
                                <p>{data?.desc}</p>
                            </figcaption><img src={data?.image} alt="sample8" />
                            <div className="position">{data?.status}</div>
                        </figure>
                    </Tooltip>
            }
        </div>
    )
}

export default ProjectsCard