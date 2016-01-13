function max(){
    var max=arguments[0];
    for(var i=1;i<arguments.length-1;i++){
        if(max<arguments[i])
            max=arguments[i];
    }
}
function maxsum(x,l,u){
    if(l>u)
        return 0;
    if(l==u)
        return max(0,x[l]);
    var m=Math.floor(((l+u)/2));
    var lmax= 0,sum=0;
    for(var i=m;i>=l;i--){
        sum+=x[i];
        lmax=max(sum,lmax);
    }
    var rmax= 0,sum=0;
    for(var i=m;i<=u;i++){
        sum+=x[i];
        rmax=max(sum,rmax);
    }
    return max(maxsum(x,l,m),maxsum(x,m+1,u),lmax+rmax);
}

    var x=[31,-41,59,26,-53,58,97,-93,-23,84];
    var answer=maxsum(x, 0, x.length-1);
    console.log(answer);
