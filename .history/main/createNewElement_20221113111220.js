/**
 * 创建一个新的元素。  
 * 状态：正常。  
 * @version 1.0.0.0
 * @param {string} Parent - 指定父元素的唯一标识，如果有多个，则默认第一个。  
 * @param {string} ElementTag - 指定要创建的元素，元素标签与输入值相同。  
 * @param {string} [Content] - 指定元素的内容，显性元素\<div\>、\<a\>、\<p\>……会显示在屏幕上，隐性标签\<script\>……则作为内容。  
 * @param {Array<string>} [Attributes] - 指定元素的属性，例如：class、id、src、href……，格式：["class=abc1","id=abc2","V-if=true","hidden"]。  
 * @param {Array<string>} [Styles] - 指定元素的样式，例如：display、color、background……，格式同Attributes。  
*/
function createNewElement(Parent, ElementTag, Content, Attributes, Styles) {
    let _$Element = document.createElement(ElementTag);
    if (Content) {
        _$Element.appendChild(document.createTextNode(Content));
    };
    if (Attributes) {
        Attributes.forEach(_$a => {
            if (RegExp("=").test(_$a)) {
                let _$b = _$a.split("=");
                _$Element.setAttribute(_$b[0], _$b[1]);
            } else {
                let _$b = document.createAttribute(_$a);
                _$Element.setAttributeNode(_$b)
            }
        });
    };
    if (Styles) {
        Styles.forEach(_$a => {
            if (RegExp("=").test(_$a)) {
                let _$b = _$a.split("=");
                _$Element.style[_$b[0]] = _$b[1];
            }
        });
    };
    document.querySelector(Parent).appendChild(_$Element);
};