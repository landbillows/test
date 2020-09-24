//默认导出 {defaul:fn}
export default function(a,b) {
    return a+b;
}

//具名导出 {double:fn}
export  function double(a) {
    return a*2;
}

//具名导出 {n:7}
export  var a=7;
//最终导出：{defaul:fn,double:fn,n:7}