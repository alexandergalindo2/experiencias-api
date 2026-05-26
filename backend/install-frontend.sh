#!/bin/bash

cd frontend
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
  echo "Error during npm install"
  exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "The application will be available at http://localhost:3000"
