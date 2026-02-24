pipeline {
    agent any

    environment {
        APP_NAME          = 'Les Vrais Naturels Backend'
        NODE_ENV          = 'production'
        PORT              = '3200'
        TZ                = 'Africa/Algiers'

        DB_HOST           = 'db'
        DB_PORT           = '3306'
        DB_HOST_PORT      = '3307'
        DB_USERNAME       = 'jflarose'
        DB_PASSWORD       = 'StrongPass123!'
        DB_DATABASE       = 'les_vrais_naturels'
        MYSQL_ROOT_PASSWORD = 'RootPass123!'
        DATABASE_URL      = 'mysql://jflarose:StrongPass123!@db:3306/les_vrais_naturels'

        JWT_SECRET        = 'jf-larose-les-vrais-naturels-super-secret-2026'
        CLIENT_BASE_URL   = 'https://vrainaturel.jf-larose.com'
        ADMIN_BASE_URL    = 'https://vrainaturel-backoffice.jf-larose.com'
        ALLOWED_ORIGINS   = 'https://vrainaturel-backoffice.jf-larose.com,https://vrainaturel.jf-larose.com,https://jflarose-backoffice.sensinglabo.com,https://jflarose-client.sensinglabo.com,http://localhost:3000,http://localhost:5173,http://192.168.1.6:3000,http://192.168.1.4:3000,http://192.168.1.4:8081'

        IMAGE_NAME        = 'les-vrais-naturels-backend'
    }

    stages {

        stage('📥 Checkout') {
            steps {
                checkout scm
            }
        }

        stage('📝 Generate .env File') {
            steps {
                sh '''
                    rm -f .env
                    cat > .env << ENVEOF
        APP_NAME=Les Vrais Naturels Backend
        NODE_ENV=production
        PORT=3200
        TZ=Africa/Algeria
        DB_HOST=db
        DB_PORT=3306
        DB_HOST_PORT=3307
        DB_USERNAME=jflarose
        DB_PASSWORD=StrongPass123!
        DB_DATABASE=les_vrais_naturels
        MYSQL_ROOT_PASSWORD=RootPass123!
        DATABASE_URL=mysql://jflarose:StrongPass123!@db:3306/les_vrais_naturels?connection_limit=10&connect_timeout=60&pool_timeout=30&socket_timeout=30
        JWT_SECRET=jf-larose-les-vrais-naturels-super-secret-2026
        CLIENT_BASE_URL=https://vrainaturel.jf-larose.com
        ADMIN_BASE_URL=https://vrainaturel-backoffice.jf-larose.com
        ALLOWED_ORIGINS=https://vrainaturel-backoffice.jf-larose.com,https://vrainaturel.jf-larose.com,https://jflarose-backoffice.sensinglabo.com,https://jflarose-client.sensinglabo.com,http://localhost:3000,http://localhost:5173,http://192.168.1.6:3000,http://192.168.1.4:3000,http://192.168.1.4:8081
        SEED_ON_START=true
        ENVEOF
                    echo "✅ .env file generated"
                '''
            }
        }

        stage('🐳 Build Docker Image') {
            steps {
                sh """
                    docker build \\
                        --no-cache \\
                        -t ${IMAGE_NAME}:${BUILD_NUMBER} \\
                        -t ${IMAGE_NAME}:latest \\
                        .
                """
                echo '✅ Docker image built'
            }
        }

        stage('🛑 Stop Old Stack') {
            steps {
                sh '''
                    docker compose down --remove-orphans || true
                    echo "✅ Old stack removed"
                '''
            }
        }

        stage('🚀 Start Stack') {
            steps {
                sh '''
                    docker compose up -d
                    echo "✅ Stack started — entrypoint.sh handles migrate + seed"
                '''
            }
        }

        stage('📊 Verify') {
            steps {
                sh '''
                    echo "⏳ Waiting 40s for app to initialize..."
                    sleep 40

                    echo "🔍 Container status:"
                    docker compose ps

                    echo "📋 Backend logs (last 60 lines):"
                    docker compose logs backend --tail 60

                    echo "🗄️ DB table counts:"
                    docker compose exec -T db mysql -ujflarose -pStrongPass123! les_vrais_naturels -e "
                        SELECT '\''admin_users'\'' as tbl, COUNT(*) as cnt FROM admin_users
                        UNION ALL SELECT '\''products'\'', COUNT(*) FROM products
                        UNION ALL SELECT '\''commission_rules'\'', COUNT(*) FROM commission_rules
                        UNION ALL SELECT '\''pharmacies'\'', COUNT(*) FROM pharmacies;
                    " 2>/dev/null || echo "⚠️ DB check failed - check logs above"
                '''
            }
        }
    }

    post {
        always {
            cleanWs()
            echo '🧹 Workspace cleaned'
        }
        success {
            echo "🎉 Deployment successful - Build #${BUILD_NUMBER}"
            echo "🚀 API: http://209.74.89.216:3200/api"
            echo "📚 Docs: http://209.74.89.216:3200/api/docs"
        }
        failure {
            sh '''
                echo "❌ Deployment failed!"
                docker compose logs backend --tail 100 2>/dev/null || true
                docker compose logs db --tail 50 2>/dev/null || true
            '''
        }
    }
}