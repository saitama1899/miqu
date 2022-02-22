const RadioInput = ({signo, partido, checked, setter}) => {
	return (
	  <label>
	    <input 
        type="radio" 
        checked={checked[partido] == signo}
	      onChange={() => setter(partido, signo)} 
      />
	    <span>{signo}</span>
	  </label>
	)
}

export default RadioInput