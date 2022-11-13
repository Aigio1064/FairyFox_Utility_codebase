/**
 * 获取链接search并转换为Object，如果没有search则返回false，如果有但是问号后没有内容则返回true。  
 * 注意！这只能做到读取，并不能修改，因为那将刷新页面！所以请不要尝试赋值！因为那会显得你很蠢！  
 * $_GET 是php的写法，与 searchToObject() 是一样的，所以也不要尝试赋值！  
 * 状态：正常。  
 * @version 1.0.0.0
 * @param {string} [getName] - 只输出规定的某个值的内容而不是包含全部的Object，如果找不到此项则会返回undefined。  
*/
function searchToObject(getName) {
    if (window.location.search.substring(1)) {
        let $Paramete = window.location.search.substring(1).split("&");
        let $c = {};
        $Paramete.forEach($a => {
            $b = $a.split("=");
            $c[$b[0]] = $b[1];
        });
        if (getName) {
            return $c[getName];
        } else {
            return $c;
        };
    } else {
        return!!window.location.search;
    }
};
const $_GET = searchToObject();