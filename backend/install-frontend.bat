@echo off
cd frontend
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
  echo Error during npm install
  exit /b 1
)
echo.
echo ✅ Dependencies installed successfully!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo The application will be available at http://localhost:3000
pause
