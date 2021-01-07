FROM tiangolo/uwsgi-nginx-flask:python3.8

COPY ./requirements.txt ./requirements.txt

RUN pip install -r requirements.txt

COPY ./app /app

ENTRYPOINT ["python"]

CMD ["main.py"]