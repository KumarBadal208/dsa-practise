//Count negative numbers in a sorted matrix

let countNegatives = function(grid) {
    let m = grid.length, n = grid[0].length;
    let i=0, j=n-1,count=0;

    while(i >= 0 && i<m && j>=0 && j < n){
        if(grid[i][j] >= 0){
            //postive case
            i++;
            
        }
        else{
            count += (m - i);
            j--;
        }
    }
    return count;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));