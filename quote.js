function quote(car_value, risk_rating){
 

  if (typeof car_value === "string"){
    car_value = parseFloat(car_value.replace(/[^\d.]/g, ''))
    if( isNaN(car_value)) {
      console.log("please enter a number") 
      return "Please ensure you are entering numerical numbers" 
    }
  } else if(car_value <= 0 ){
   return "Car value must be a positive number"
  } else if(risk_rating <= 0 || risk_rating > 5){
    return "Risk rating must be between 1 and 5"
  } else if (!car_value || !risk_rating ){
    return "Please enter a value for all fields"
  } else if (typeof car_value !== "number" || typeof risk_rating !== "number" || isNaN(car_value) || isNaN(risk_rating)){
    return "Please enter numbers only" 
  } 

    const yearly_premium =  ((car_value * risk_rating) / 100).toFixed(2)
    const monthly_premium = (yearly_premium / 12).toFixed(2)

  return {
    "monthly_premium": Number(monthly_premium),
    "yearly_premium": Number(yearly_premium)
  }
}




module.exports = quote


