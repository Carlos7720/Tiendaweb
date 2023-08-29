# Imagen base de Node
FROM node:10

# Selecciona el Directorio de Trabajo
WORKDIR /usr/src/app

#Copia Todos los Archivos en el Directorio de Trabajo
COPY . .

#variable de entorno para el titulo
ENV TITULO='Contenedores Docker'

#Instala las dependecias del Proyecto
RUN npm install

#Expone el puerto en el cual se ejecutara nodejs
EXPOSE 3000

#Iniciar nodejs
CMD ["npm", "start"]
