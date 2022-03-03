const RadioInput = ({signo, partido, checked, setter}) => {
	return (
	  <span className='relative mr-[3px]'>
			<span className='absolute bottom-[2px] left-[5px] pointer-events-none text-gray-600'>{signo}</span>
	    <input 
        type='radio' 
        checked={checked[partido] == signo}
	      onChange={() => setter(partido, signo)} 
				className='radioButtonQuiniela hover:cursor-pointer'
      />
	    
	  </span>
	)
}

export default RadioInput