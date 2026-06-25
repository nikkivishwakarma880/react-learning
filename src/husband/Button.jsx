// props:-> 

const Button = ({title="submit", color="text-white", bgColor="bg-black"}) => {
  return (
    <>
      <div>
        <button className= {`py-2 px-3 ${color} ${bgColor} rounded-md`} >{title}</button>
      </div>
    </>
  )
}

export default Button