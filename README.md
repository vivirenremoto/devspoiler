# devspoiler
Los programadores a veces nos toca lidiar con herramientas web en entornos de desarrollo, producción y testing que pueden compartir la misma interfaz, por ejemplo cpanel, phpmyadmin, whm, etc.

Esta extensión de chrome te avisa si estás en producción, desarrollo o testing

![dev_pro](http://i.imgur.com/MjflOnh.png "dev_pro")


**Antes de empezar**

1. [Descarga la extensión](https://github.com/miquelcamps/devspoiler/archive/master.zip)
2. Descomprime el zip
3. Mueve la carpeta "devspoiler-master" fuera de la carpeta de descargas para evitar borrar la extensión sin querer.

**Configuración**

Lo que hace la extensión es buscar si alguna parte de la url de la web que tengas abierta coincide con una url que hayas definido comoe producción, desarrollo o testing, esto es en el fichero config.js:

Producción
```
var pro_urls = ["11.11.11.11", "domain1.com", "domain1.com/subfolder"];
```

Desarrollo
```
var dev_urls = ["localhost/phpMyAdmin", "22.22.22.22", "domain2.com", "domain2.com/subfolder"];
```

Testing
```
var test_urls = ["33.33.33.33", "domain3.com", "domain3.com/subfolder"];
```

**Instalar extensión en chrome**

1. Entra en el menú de chrome: ventana > extensiones
2. Dale al botón decargar extensión descomprimida
3. Cuando entres en una url que hayas definido como producción, desarrollo y testing se mostrará un div en la parte inferior de la pantalla para avisarte, rojo (producción), verde (desarrollo) y naranja (testing)

**Nota: Si haces algún cambio en la configuración**

Vuelve a la ventana de extensiones de Chrome, busca la extensión "devspoiler" y pulsa "Volver a cargar".
