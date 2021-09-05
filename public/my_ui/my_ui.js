/* 為Jquery家的原型物件添加一個新的accordion()插件函數 */
/* 
jQuery.fn.accordion=function(){
    //this->將來要調用當前accordion()函數的.前的JQuery物件,也就是整個插件的父物件
    let $parent=this;


    // 1.自動侵入所需的class
    //為$parent自己加上accordion class
    $parent.addClass("accordion")
    //return $parent

    //$parent下奇數位置的元素加上title class
    .children(":even").addClass("title")
    //return title

    //每個奇數位置的元素的下一個兄弟都加上content fade 兩個class
    .next().addClass("content fade")
    //每個title的下一個兄弟
    //得到三個content
    


    //所有偶數位置元素中的第一個加in class
    .first().addClass("in");


    

    // 2.自動綁定事件處理函數
    // 1. 找到觸發事件的元素:減少事件監聽, 用事件委託方式把點擊事件統一綁定在父元素上
    $parent.on("click",".title",function(){
        //2.找到要修改的元素
        //3.修改元素
        
        $(this) //當前.title
        .next() //.title旁邊的.content
        .toggleClass("in")
        //return 當前title旁邊的content
        //找到當前content的所有兄弟中的其他content, 都去掉in class使他們隱藏
        .siblings(".content")
        .removeClass("in");
        })
}


// this->$("#my-accordion")父級div
 */



jQuery.fn.accordion=function(){
    let $parent=this;
    $parent.addClass("accordion")
    .children(":even").addClass("title")
    .next().addClass("content fade")
    .first().addClass("in");
    $parent.on("click",".title",function(){
        $(this).next().toggleClass("in")
        .siblings().removeClass("in")
    })
}
