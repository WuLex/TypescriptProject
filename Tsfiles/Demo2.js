// Mixin
var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        console.log("Disposing...");
    };
    return Disposable;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        console.log("Activating...");
    };
    return Activatable;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var SmartObjectImplementation = /** @class */ (function () {
    function SmartObjectImplementation() {
        var _this = this;
        setInterval(function () { return _this.activate(); }, 1000);
    }
    return SmartObjectImplementation;
}());
applyMixins(SmartObjectImplementation, [Disposable, Activatable]);
var smartObj = new SmartObjectImplementation();
setTimeout(function () { return smartObj.dispose(); }, 5000);
