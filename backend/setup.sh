#!/bin/bash

echo "🚀 Setting up Daily Activity Tracker Backend..."

# Generate application key
php artisan key:generate

# Create cors.php config file
cat > config/cors.php << 'EOF'
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:5173'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
EOF

echo "✅ CORS configuration created"

# Create storage directories
mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs

# Set permissions
chmod -R 775 storage
chmod -R 775 bootstrap/cache

echo "✅ Storage directories created"

# Install dependencies
composer install

echo "✅ Dependencies installed"

# Clear cache
php artisan config:clear
php artisan cache:clear

echo "✅ Cache cleared"

echo ""
echo "🎉 Backend setup complete!"
echo ""
echo "To start the server:"
echo "  php artisan serve --port=8000"
echo ""
echo "Make sure MongoDB is running on port 27017"