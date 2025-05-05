export const BinarySearch=(arr,target)=>{
    let left=0;
    let right=arr.length-1;


    while(left<=right){
        const mid=Math.floor((left+right)/2);
        const comp= comparator(arr[mid],target);
        if(comp===0){
            return mid;
        }
        else if(comp < 0) left=mid+1;
        else right=mid-1;
    }
    return -1;
};

export const sevirityRank={
    low:1,
    mediam:2,
    high:3,
    critical:4
}