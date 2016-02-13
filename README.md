# devspoiler
Los programadores a veces nos toca lidiar con herramientas web en entornos de desarrollo y producción que comparten la misma interfaz, por ejemplo cpanel, phpmyadmin, whm, etc.

Esta extensión de chrome te avisa si estás en producción o desarrollo

![dev_pro](http://i.imgur.com/MjflOnh.png "dev_pro")


**Antes de empezar**
1. [descarga el script](https://github.com/miquelcamps/devspoiler/archive/master.zip)
2. descomprime el zip

**Configuración**

Lo que hace la extensión es buscar si alguna parte de la url de la web que tengas abierta coincide con una url que hayas definido comoe producción o desarrollo

Producción
```
var pro_urls = ["11.11.11.11", "domain1.com", "domain1.com/subfolder"];
```

Desarrollo
```
var dev_urls = ["localhost/phpMyAdmin", "22.22.22.22", "domain2.com", "domain2.com/subfolder"];
```

**Instalar extensión en chrome**
1. Entra en el menú de chrome: ventana > extensiones
2. Dale al botón decargar extensión descomprimida
3. Cuando entres en una url que hayas definido como producción o desarrollo se mostrará un div en la parte inferior de la pantalla para avisarte, rojo (producción) y verde (desarrollo)

**Nota: Si haces algún cambio en la configuración**

Vuelve a la ventana de extensiones de Chrome, busca la extensión "devspoiler" y pulsa "Volver a cargar".
