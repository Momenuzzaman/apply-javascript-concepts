const year = 2021;
const leepYear = year % 4;
if(leepYear == 0)
{
    console.log("Your year is a Leep Year");
}
else{
    console.log("Your year is not a Leep Year");
}



function isLeepYear(year)
{
  const  leepYear = year % 4;
   if(leepYear ==0 ){
        return true;
   }
   else{
       return false;
   }
}

const leepYear2000 = isLeepYear(2000);
 console.log(leepYear2000);
 const leepYear2001 = isLeepYear(2001);
 console.log(leepYear2001);
