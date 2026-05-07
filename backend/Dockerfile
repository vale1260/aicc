FROM python:3.10.12-slim-buster

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /app/aicc

ENTRYPOINT ["../entrypoint.sh"]