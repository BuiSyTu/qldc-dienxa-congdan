import './HeaderBlock.scss'

const HeaderBlock = (props) => {
  const { text, id } = props

  return (
    <div id={id} className='mt-4 header-control'>{text}</div>
  );
}

export default HeaderBlock