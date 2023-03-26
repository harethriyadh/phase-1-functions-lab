function distanceFromHqInBlocks(currentLocation) {
    const hqLocation = 42;
    let distanceInBlocks;
  
    if (currentLocation > hqLocation) {
      distanceInBlocks = currentLocation - hqLocation;
    } else {
      distanceInBlocks = hqLocation - currentLocation;
    }
    return distanceInBlocks;
  }

  function distanceFromHqInFeet ( distance ) 
  {
    const hq = 42 ;
    let dInFeet = ( distance - hq ) * 264 ;
    if ( dInFeet < 0 ) 
    {
        dInFeet *= -1 ;
    }

    return dInFeet;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; 
    let distanceInFeet = Math.abs(startBlock - endBlock) * blockLength;
    return distanceInFeet;
  }


//   calculatesFarePrice(start, destination)
//       1) gives customers a free sample
//       2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//       3) charges 25 dollars for a distance over 2000 feet
//       4) does not allow rides over 2500 feet
  
function calculatesFarePrice(start,end)
{
    let price = 0 ;

    let feet = 264 ;
    let dinfeet = Math.abs ( start - end ) * feet ;

    if ( dinfeet > 2500   ) { return "cannot travel that far" ; }
    
    else if (dinfeet > 400 && dinfeet <= 2000 ) { return ( dinfeet - 400 ) * 0.02 ; } 
    
    else if(dinfeet >= 2000 && dinfeet <= 2500 ) { return 25 ; }

    else { return price ; }
}
