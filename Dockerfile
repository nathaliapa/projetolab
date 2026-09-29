FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

# O servidor é estático e não precisa de dependências externas.
RUN useradd --create-home --shell /usr/sbin/nologin appuser

COPY --chown=appuser:appuser . .

USER appuser
EXPOSE 3000

CMD ["python3", "server.py"]
