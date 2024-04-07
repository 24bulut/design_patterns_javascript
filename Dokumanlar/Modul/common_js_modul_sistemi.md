CommonJS, JavaScript tarafından kullanılan bir modül sistemidir ve genellikle sunucu taraflı uygulamalarda (örneğin, Node.js) kullanılır. Modüler programlama için bir standart belirlemek amacıyla ortaya çıkmıştır. CommonJS modül sistemini kullanarak, JavaScript dosyalarını modüllere ayırabilir ve bu modüller arasında kodu paylaşabilirsiniz.

CommonJS modül sistemi, iki ana bileşenden oluşur:

Modül İçe Aktarma (Require): require() fonksiyonu, dış modüllerin içe aktarılmasını sağlar. Bir modülü içe aktarmak için, modül yolunu belirterek require() fonksiyonunu kullanabilirsiniz. Bu, belirtilen modül dosyasının çalıştırılmasını sağlar ve döndürülen nesneyi kullanmanıza izin verir.

```
    const myModule = require('./myModule');
```

Modül Dışa Aktarma (Export): module.exports veya exports anahtar kelimeleri, bir modülün dışarıya neyi döndüreceğini belirtmek için kullanılır. Modül dosyası içinde tanımlanan nesneleri, fonksiyonları veya diğer öğeleri dışa aktarabilirsiniz. module.exports bir nesne döndürmek için kullanılırken, exports daha çok bir özellik veya fonksiyon döndürmek için kullanılır.


```
    // myModule.js
    module.exports = {
        foo: function() {
            return 'foo';
        },
        bar: function() {
            return 'bar';
        }
    };
```

CommonJS modül sistemi, sunucu taraflı JavaScript uygulamaları için güçlü bir modülleştirme çözümü sağlar. Ancak, tarayıcı taraflı JavaScript uygulamalarında daha modern bir modül sistemine (ECMAScript modülleri) geçiş yapılması önerilir.

