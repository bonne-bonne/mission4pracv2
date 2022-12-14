function rating(claimHistory) {
  const claim_history = claimHistory;
  const num_of_matches = [];
  let total_matches = 0;

  console.log(`this is a the string received: ${claim_history}`);

  if (!claim_history || typeof claim_history !== "string"){
    return "Invalid input"
  }
  
  if (claim_history &&  typeof claim_history === "string") {
    const count_collide = (claim_history.match(/collide/g) || []).length;
    const count_crash = (claim_history.match(/crash/g) || []).length;
    const count_scratch = (claim_history.match(/scratch/g) || []).length;
    const count_bump = (claim_history.match(/bump/g) || []).length;

    
 num_of_matches.push(...[count_collide, count_crash, count_scratch, count_bump])
    console.log (num_of_matches);
  }

 num_of_matches.forEach(num => {
    total_matches += num
  })

  if(total_matches > 5){
    total_matches = 5
  }
  if (total_matches === 0){
    total_matches = 1
  }

  return { "risk_rating": total_matches }


}

module.exports = rating;
