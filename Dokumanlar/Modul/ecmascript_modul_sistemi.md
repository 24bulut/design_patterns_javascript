ECMAScript modül sistemi (ESM), JavaScript'te modüler programlamayı desteklemek için standartlaştırılmış bir modül sistemidir. ES6 (ECMAScript 2015) ile birlikte tanıtılmıştır ve tarayıcılar ve Node.js gibi platformlar tarafından desteklenmektedir. ECMAScript modül sistemi, CommonJS gibi diğer modül sistemlerinden farklılık gösterir ve daha modern bir yaklaşım sunar.


ECMAScript modül sistemi şu temel özelliklere sahiptir:

Export ve Import İfadeleri: Modüller arasında veri paylaşımı için export ve import ifadeleri kullanılır. export, bir modülde tanımlanan nesneleri veya fonksiyonları dışarıya açmak için kullanılırken, import, dışarıdan başka bir modülü içe aktarmak için kullanılır.


```
// module.js
export function foo() {
  return 'foo';
}

// main.js
import { foo } from './module.js';
console.log(foo()); // "foo"

```

Statik Yapı: ECMAScript modül sistemi, import ifadelerinin statik olarak çözümlenmesini gerektirir. Yani, modüllerin başlangıçta yüklenmesi gerekir ve dinamik olarak yüklenemezler. Bu, modül bağımlılıklarının derleme zamanında çözülmesi anlamına gelir.


Scope: Her modül, kendi kapsamına sahiptir. Yani, bir modül içinde tanımlanan değişkenler ve fonksiyonlar, varsayılan olarak o modülün dışından erişilemez.


Dil Desteği: ECMAScript modül sistemi, ECMAScript standartlarının bir parçası olduğundan, tarayıcılar ve Node.js gibi platformlar tarafından doğrudan desteklenir. Ancak, Node.js'de kullanırken, .mjs uzantılı dosyalar veya --experimental-modules bayrağı kullanılabilir.


ECMAScript modül sistemi, modern JavaScript projelerinde yaygın olarak kullanılan bir modülleştirme çözümüdür. ES6 ve sonraki sürümleriyle birlikte, JavaScript geliştiricilerine daha güçlü, tutarlı ve organize bir kodlama deneyimi sunar.



TypeScript, varsayılan olarak ECMAScript modül sistemini kullanır. Bu, TypeScript dosyalarında modüllerin import ve export ifadeleriyle tanımlandığı anlamına gelir. Bu, modern JavaScript geliştirme pratiklerine daha uygun bir yaklaşımdır ve TypeScript'in yaygın olarak kullanılan özelliklerinden biridir.

Ancak, TypeScript projelerinde CommonJS modül sistemi de kullanılabilir. Bu, TypeScript'in --module veya tsconfig.json dosyasında module seçeneğiyle yapılandırılarak gerçekleştirilir. Örneğin, CommonJS modül sistemi kullanmak istiyorsanız, tsconfig.json dosyanızda "module": "commonjs" ayarını belirtebilirsiniz.

