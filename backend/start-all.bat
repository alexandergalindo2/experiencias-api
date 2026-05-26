@echo off
REM Script para ejecutar API y Frontend simultaneamente en Windows

echo Starting Experiencias API...
start cmd /k "npm run dev"

REM Esperar 3 segundos para que la API inicie
timeout /t 3

echo Starting React Frontend...
start cmd /k "cd frontend && npm run dev"

echo.
echo ✅ Ambos servidores se han iniciado:
echo    - API:      http://localhost:4000
echo    - Frontend: http://localhost:3000
echo.
echo Presiona Ctrl+C en cada ventana para detener los servidores
pause
