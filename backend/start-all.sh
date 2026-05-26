#!/bin/bash

echo "Starting Experiencias API..."
npm run dev &
API_PID=$!

sleep 3

echo "Starting React Frontend..."
cd frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Ambos servidores se han iniciado:"
echo "   - API:      http://localhost:4000"
echo "   - Frontend: http://localhost:3000"
echo ""
echo "Presiona Ctrl+C para detener los servidores"

wait
