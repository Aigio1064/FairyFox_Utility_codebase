function pullPackageElement(DOMPackagePath) {
    let _packageData;
    let _network = new XMLHttpRequest();
        _network.open("GET", DOMPackagePath, false);
        _network.onreadystatechange = function() {
            if (this.readyState == 4) {
                _packageData = JSON.parse(this.responseText);
            }
        };
        _network.send();
    let _mainTree;
    return function(){
        return _packageData;
    };
};


var a = {
    "html?id=main&class=root":""
}