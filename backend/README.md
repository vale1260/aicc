# Verificar datos creados en la base de datos
1. Conectarse al contenedor de Docker `postgresql`.
1. Ejecutar el siguiente comando para conectarse a la base de datos `postgres` con el usuario `postgres`:
```bash
psql -d postgres -U postgres
```

# Subir archivos usando [curl](https://curl.se/)
```bash
curl -X POST -F 'file=@/ruta/al/archivo' http://localhost:5000/upload/<curso_id>
```