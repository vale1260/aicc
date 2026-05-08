# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Comando para iniciar la aplicación (puedes ajustarlo según tus necesidades)
ENTRYPOINT ["npm", "start"]