const ListItem = ({ index, text }) => {
  return (
    <div
      className={`${
        index !== 4 && 'border-b border-b-[#E1E1E1]'
      } py-2 md:py-2.5`}
    >
      <p className='font-bold text-14-20 text-textDark h-10 line-clamp-2'>
        {text}
      </p>
    </div>
  );
};
export default ListItem;
