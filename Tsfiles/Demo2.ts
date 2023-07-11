// Mixin
class Disposable {
  dispose() {
    console.log("Disposing...");
  }
}

class Activatable {
  activate() {
    console.log("Activating...");
  }
}

// 使用泛型和交叉类型实现 mixin
type SmartObject = Disposable & Activatable;

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class SmartObjectImplementation implements SmartObject {
  dispose: () => void;
  activate: () => void;

  constructor() {
    setInterval(() => this.activate(), 1000);
  }
}

applyMixins(SmartObjectImplementation, [Disposable, Activatable]);

const smartObj = new SmartObjectImplementation();
setTimeout(() => smartObj.dispose(), 5000);