#!/bin/bash

# Esperar por el inicio de Postgres
sleep 5

# Crear directorio "uploads" para almacenar archivos subidos
mkdir -p /app/uploads

# Eliminar archivo de prueba con datos de usuarios
rm fake_usuario.csv

# Eliminar migraciones anteriores para regenerarlas
rm -r migrations

# Configurar migraciones
echo -e "\nConfigurando migraciones"
flask db init

# Generar migraciones
echo -e "\nGenerando migraciones"
flask db migrate

# Aplicar migraciones
echo -e "\nAplicando migraciones"
flask db upgrade

# Cargar datos de prueba
echo -e "\nCargando datos de prueba"
python seed.py

# Iniciar servidor
echo -e "\nIniciando servidor"
flask run --host=0.0.0.0 --port=5000