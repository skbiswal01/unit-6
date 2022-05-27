let row = 0, col = 0;
    let prev, curr;
    let ram = n;
    let m = n;
    while (row < m && col < n){
        if (row + 1 == m || col + 1 == n){
            break;
        }
        prev = mat[r + 1][col];
        
        for(var i = col; i < n; i++){
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
        for(var i = row; i < m; i++){
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
        if (r < m){
            for(var i = n - 1; i >= c; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
        if (c < n){
            for(var i = m - 1; i >= r; i--)
            {
                curr = mat[i][c];
                mat[i][c] = prev;
                prev = curr;
            }
        }
        c++;
    }
    for(let i=0;i<ram;i++){
        str = mat[i].join(" ");
        console.log(str);
    }