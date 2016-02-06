//这三个函数其实可以写成一个函数，前提是this关键字可以用。还有待改进！！
function clicked1(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('sty').style.backgroundColor='#adadad';
    document.getElementById('data').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit2').style.visibility='hidden';
    document.getElementById('edit3').style.visibility='hidden';
}
function clicked2(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('append').style.backgroundColor='#adadad';
    document.getElementById('data').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit1').style.visibility='hidden';
    document.getElementById('edit3').style.visibility='hidden';
}
function clicked3(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('sty').style.backgroundColor='#adadad';
    document.getElementById('append').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit2').style.visibility='hidden';
    document.getElementById('edit1').style.visibility='hidden';
}
//下面是用jquery异步方式实现的
$(function(){
    $("body").load(clicked1('append','edit1'));
});
/*
下面是用JS实现的
document.writeln("<script type=\"text\/javascript\">");//这会覆盖网页中的内容
document.getElementsByTagName('body').onload=alert("HE");
document.writeln("<\/script>");
*/
$(function(){
var gridster;
$(function(){

    gridster = $(".gridster ul").gridster({    //通过jquery选择DOM实现gridster
        widget_base_dimensions: [100, 120],    //模块的宽高 [宽,高]
        widget_margins: [5, 5],    //模块的间距 [上下,左右]
//            draggable: {
//                handle: '.con'    //模块内定义拖动的元素<header>，这里也支持jquery选择器，如"span.drag_handle"
//            }
        draggable:{
            start: function(event, ui){

                console.log("start");
            },
            drag:function(event, ui){
                console.log("drag");
            },
            stop: function(event, ui){
                console.log("stop");
            }
        }
    }).data('gridster');
});
$("#save").click(function () {
    var title={
        text:'月平均气温'
    };
    var xAxis={
        categories: ['一月', '二月', '三月', '四月', '五月', '六月'
            ,'七月', '八月', '九月', '十月', '十一月', '十二月']
    };
    var yAxis = {
        title: {
            text: 'Temperature (\xB0C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var tooltip = {
        valueSuffix: '\xB0C'
    }

    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };

    var series =  [
        {
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,
                24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,
                17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,
                16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ];
    var json={};
    json.title=title;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;
    var li=gridster.add_widget('<li class="con">The HTML of the widget...</li>', 4, 2);
    $(li).highcharts(json);

});
    $("#pushcolumn").draggable();
    $("#component").draggable();
});