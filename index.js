
const reve=(s,i,ans)=>{
	if(i>=0){
		return reve(s,i-1,ans+s[i])
	}else
	  return ans
}


//console.log(reve("nayan",("nayan".length)-1),'')

console.log(fetch('https://testapi.donatekart.com/api/campaign'))
