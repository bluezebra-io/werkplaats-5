#!/bin/bash

# Kill process on port 3100 if running
echo "Checking port 3100..."
lsof -ti:3100 | xargs kill -9 2>/dev/null && echo "Port 3100 freed" || echo "Port 3100 was free"

# Start Next.js on port 3100
echo "Starting Werkplaats 5 on http://localhost:3100"
npm run dev -- -p 3100
