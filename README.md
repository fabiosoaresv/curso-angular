### Setup
1. Clone o projeto
```consoole
git clone https://github.com/fabiosoaresv/curso-angular.git
```

2. Copiar os arquivos package.json e serve.js para um outro diretório.

3. Exemplo
```console
mkdir ~/course-manager-server
cp ~/curso-angular/src/assets/server/serve.js ~/course-manager-server
cp ~/curso-angular/src/assets/server/package.json ~/course-manager-server
```

4. Instale os pacotes
```console
cd ~/course-manager-server && npm install
```

5. Inicialize o server
```console
node serve.js
```

6. Em outro terminal inicie o projeto do Angular
```console
cd curso-angular && ng serve
```

7. Abra no navegador: http://localhost:4200
