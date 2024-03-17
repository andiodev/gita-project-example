const ItemAction = (props) => {

    const { data , edit , remove , info, map, chart} = props;

    return (
        <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.useJob}</td>
            <td>{data.useId}</td>
            <td>{data.father}</td>
            <td>{data.position}</td>
            <td className='user-item-btn'>
                <i class="bi bi-info-circle-fill" title={'مشاهده اطلاعات'} onClick={()=>info(data.id)}></i>
                <i class="bi bi-pencil-square" title={'ویرایش'} onClick={()=>edit(data.id)}></i>
                <i class="bi bi-trash-fill" title={'حذف'} onClick={()=>remove(data.id)}></i>
                <i class="bi bi-geo-alt-fill" title={'موقعیت'} onClick={()=>map(true)}></i>
                <i class="bi bi-graph-up-arrow" title={'نمودار'} onClick={()=>chart(true)}></i>
            </td>
        </tr>
    )
}

export default ItemAction