import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { colors } from '../../themes/colors';

const BreadCrumb = ({ data, page }: any) => {
  console.log(data, 'sliced')
  const links = data?.map((d: any) => {
    const dat = d === "" ? 'home':d?.split('-')?.join(' ')
    return {
      title: <Link to={"/"+d} style={{textTransform:'capitalize', fontSize:20, fontWeight:600}}>{dat}</Link>
    }
  })
  return (
    <div style={{background:'#00000090', width:"max-content", padding:'15px 25px'}}>
      <Breadcrumb
    separator={<div style={{color:colors?.background, fontSize:20, fontWeight:600}}>/</div>}
      items={links.concat([{ title: <div style={{textTransform:'capitalize', fontSize:20, fontWeight:600}}>{page}</div>}])}
    />
    </div>
  );
}

export default BreadCrumb;