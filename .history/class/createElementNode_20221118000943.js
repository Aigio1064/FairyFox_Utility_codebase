/**
 * Copyright 2022 Aigio1064  
 * 创建一个元素节点，并返回元素对象，创建的元素将带有动态唯一标识以便使用。  
 * 状态：开发中。  
 */
class createElementNode {
    #SetElement;
    /**
     * @param {string} [Parent] - 指定父元素，如果没有指定将创建在\<body\>中。
     * @param {string} [ElementTag] - 指定要创建的元素，如果没有指定则默认为\<a\>。
     * @param {object} [Options] - 指定为元素执行的操作。
    */
    constructor(Parent, ElementTag, Options) {
        // 检查需要创建的元素是否有效，并完成准备工作
        switch (true) {
            case (typeof ElementTag == "string"):
                this.#SetElement = document.createElement()
                break;
            default:
                console.warn("一个致命的参数错误!\n你不能让ElementTag(元素标签)项为空或是除了String(字符串)以外的任何数据类型!\n这使我无法得知你需要创建的是什么元素!\n已改为a。")
                break;
        }
        // 检查选项信息，并完成设置
        switch (true) {
            case :
                break;
            default:
                break;
        }
        // 检查父元素是否有效
        switch (true) {
            case (!!document.querySelector(Parent)):
                
                break;
            default:
                console.warn("一个致命的参数错误!\n你不能让Parent(父元素)项为空或是除了String(字符串)以外的任何数据类型!\n这使我无法得知你需要在哪里创建这个元素!\n已重定向为body。")
                break;
        }
    }
}