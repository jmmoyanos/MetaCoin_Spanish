# MetaCoin despliegue
Desplegar un smart contract (Metacoin)  sobre una Blockchain (privada o publica)

## Introduccion

Estas intrucciones van a servir para compilar el proyecto  MetaCoin y migrarlo a la red ademas  iniciar el servidor para  MetaCoinWebSite.

### Instalacion de programas requeridos

Programas que se necesitan para desplegar el smart contract sobre la red 

Node JS  y npm:
(tambien tiene ejecutbales para windows 'https://nodejs.org/es/download/'), este ejecutable instala los dos programas(recomendable instalar la ultima version).

comandos para linux
```
#instalar curl
sudo apt-get update
sudo apt-get install curl

#instlar npm y node.js version 7

sudo apt-get update && sudo apt-get -y upgrade
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs

cd path/to/node_modules
git clone git://github.com/benjamn/install.git
cd install
npm install .
```
Truffle: 
```
npm install -g truffle

npm install truffle-hdwallet-provider
```

Metamask (extension de chrome o Firefox) 'https://metamask.io/'

Ganache(red blockchain local) o ejecutable(Windows utilizar ejecutable) 'https://truffleframework.com/ganache'
```
npm install -g ganache-cli
```

### Pruebas de Instalacion

Probar node js
```
node -v

npm -v
```
Crear un archivo que sea hola.js y contenga :

```
console.log('Hola, node.js y npm se han instalado correctamente')
```

Una vez se cree el archivo ir a la cmd y ir al directorio donde se ha guardado el archivo, 
dentro se ese directorio ejecutar: 
```
node hola.js
```
y se deberia printear 'Hola, node.js y npm se han instalado correctamente'. 

## Despliegue del contrato en la Red elegida

Desplegar la carpeta de Metacoin, borrar la carpeta Metacoin/Build.

Una vez se haya borrado, hay que elegir en que red BlockChain vamos a deslpegar el contrato.

Posibles redes:

- Ethereum(main,rinkeby,ropsten ...)
- Ganache 
- Otras..

Configurar archivo truffle.js, configurar los parametros de tu red:
```  
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "cadena de palabras ";
module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/rellenar con tu id")
      },
      network_id: 4
    }   
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    }
  }
};

```
Una vez este configurado el archivo compilaremos el contrato
```
truffle compile
```
Y ahora migramos el contracto, depende de la red que queramos utilizar

```
truffle migarte --network nombre_de_la_red

truffle migrate --network development

truffle mmigrate --network rinkeby 
```
El contrato estara desplegado en la red elegida. 
### Configuracion de Metamask con Ganache

'https://truffleframework.com/docs/truffle/getting-started/truffle-with-metamask'

Tip: Introducir las cuentas de ganache manualmente introduciendo su clave privada. 

### Desplegar MetaCoinWebSite

Para que funcione necesitamos introducir el archivo 'MetaCoin.JSON' que se encuentra en 'MetaCoin/build/Contracts', en 'MetaCoinWebSite/public/js'. 

Introduciremos una linea de codigo en 'MetaCoinWebSite/public/js/app.js'

```
        $.ajaxSetup({async: false});  
```
justo antes de 
```
$.getJSON('public/js/MetaCoin.json', function(data) {
            var AdoptionArtifact = data;
            MetaCoin = TruffleContract(AdoptionArtifact);
            MetaCoin.setProvider(web3.currentProvider);
```

Una vez introducido el codigo nos vamos al Directorio de MetaCoinWebSite y ejecutamos el siguiente comando que iniciara nuetro servidor en el puerto 8080 de nuestra maquina

```
node app.js
```

Una vez hecho, introducimos en nustro navegador 'localhost:8080' y ya estaria desplegado completamente el proyecto MetaCoinWebSite




