/**
 * Created by liupeng19057 on 2017-12-06.
 */
function checkboxed(objname) {
    var objnamelist=document.getElementsByName(objname);
    //全选
    if (null !== objnamelist) {
        alert('全选操作');
        for (var i=0; i<objnamelist.length;i++){
            objnamelist[i].checked = true;
        }
    }
}

function uncheckboxed(objName){
    var objNameList=document.getElementsByName(objName);
    //取消全选
    if(null !== objNameList){
        alert("取消全选操作");
        for(var i=0;i<objNameList.length;i++){
            objNameList[i].checked=false;
        }
    }
}
//页面关闭后，全局变量失效回收
var checkAll = false;//必须用全局变量来保存反复选择后的布尔值，不可使用局部变量
function allcheck(){
    checkAll = !checkAll;
    var inputs = document.getElementsByName('checkbox')
    for(var i =0;i<inputs.length;i++){inputs[i].checked = checkAll}
}