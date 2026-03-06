pipeline {
    agent any

    environment {
        APP_NAME            = 'Les Vrais Naturels Backend'
        NODE_ENV            = 'production'
        PORT                = '3200'
        TZ                  = 'Africa/Algiers'

        // MySQL container
        DB_HOST             = 'db'
        DB_PORT             = '3306'
        DB_HOST_PORT        = '3307'
        DB_USERNAME         = 'jflarose'
        DB_PASSWORD         = 'StrongPass123!'
        DB_DATABASE         = 'les_vrais_naturels'
        MYSQL_ROOT_PASSWORD = 'RootPass123!'
        DATABASE_URL        = 'mysql://jflarose:StrongPass123!@db:3306/les_vrais_naturels'

        JWT_SECRET          = 'jf-larose-les-vrais-naturels-super-secret-2026'
        CLIENT_BASE_URL     = 'https://vrainaturel.jf-larose.com'
        ADMIN_BASE_URL      = 'https://vrainaturel-backoffice.jf-larose.com'
        ALLOWED_ORIGINS     = 'https://vrainaturel-backoffice.jf-larose.com,https://vrainaturel.jf-larose.com,https://jflarose-backoffice.sensinglabo.com,https://jflarose-client.sensinglabo.com,http://localhost:3000,http://localhost:5173,http://192.168.1.6:3000,http://192.168.1.4:3000,http://192.168.1.4:8081'

        // Seed on container start
        SEED_ON_START       = 'false'

        IMAGE_NAME          = 'les-vrais-naturels-backend'
    }

    stages {

        stage('📥 Checkout') {
            steps {
                checkout scm
            }
        }

        stage('📝 Generate .env') {
            steps {
                sh '''
                    rm -f .env
                    cat > .env << 'ENVEOF'
APP_NAME=Les Vrais Naturels Backend
NODE_ENV=production
PORT=3200
TZ=Africa/Algiers
DB_HOST=db
DB_PORT=3306
DB_HOST_PORT=3307
DB_USERNAME=jflarose
DB_PASSWORD=StrongPass123!
DB_DATABASE=les_vrais_naturels
MYSQL_ROOT_PASSWORD=RootPass123!
DATABASE_URL=mysql://jflarose:StrongPass123!@db:3306/les_vrais_naturels
JWT_SECRET=jf-larose-les-vrais-naturels-super-secret-2026
CLIENT_BASE_URL=https://vrainaturel.jf-larose.com
ADMIN_BASE_URL=https://vrainaturel-backoffice.jf-larose.com
ALLOWED_ORIGINS=https://vrainaturel-backoffice.jf-larose.com,https://vrainaturel.jf-larose.com,https://jflarose-backoffice.sensinglabo.com,https://jflarose-client.sensinglabo.com,http://localhost:3000,http://localhost:5173,http://192.168.1.6:3000,http://192.168.1.4:3000,http://192.168.1.4:8081
SEED_ON_START=true
ENVEOF
                    echo "✅ .env generated"
                    echo "--- .env preview (no secrets) ---"
                    grep -v -E "PASSWORD|SECRET|TOKEN" .env || true
                '''
            }
        }

        stage('🐳 Build Image') {
            steps {
                sh """
                    docker build \\
                        --no-cache \\
                        -t ${IMAGE_NAME}:${BUILD_NUMBER} \\
                        -t ${IMAGE_NAME}:latest \\
                        .
                """
                echo '✅ Image built'
            }
        }

        stage('🛑 Stop Old Stack') {
            steps {
                sh '''
                    docker compose down --remove-orphans 2>/dev/null || true
                    echo "✅ Old stack stopped"
                '''
            }
        }

        stage('🚀 Start Stack') {
            steps {
                sh '''
                    docker compose up -d
                    echo "✅ Stack started"

                    echo "⏳ Waiting for MySQL to be healthy..."
                    attempt=1
                    while [ $attempt -le 40 ]; do
                        STATUS=$(docker inspect --format="{{.State.Health.Status}}" les-vrais-naturels-mysql 2>/dev/null || echo "unknown")
                        echo "   [$attempt/40] MySQL status: $STATUS"
                        if [ "$STATUS" = "healthy" ]; then
                            echo "✅ MySQL healthy!"
                            break
                        fi
                        if [ $attempt -eq 40 ]; then
                            echo "❌ MySQL never became healthy"
                            docker logs les-vrais-naturels-mysql --tail 30
                            exit 1
                        fi
                        sleep 5
                        attempt=$((attempt + 1))
                    done

                    echo "⏳ Waiting for backend to initialize (migrate + seed)..."
                    sleep 45

                    echo "📋 Backend logs:"
                    docker logs les-vrais-naturels-backend --tail 80
                '''
            }
        }

        stage('📊 Verify') {
            steps {
                sh '''
                    echo "🔍 Container status:"
                    docker compose ps

                    echo "🗄️ DB table counts:"
                    docker exec les-vrais-naturels-mysql mysql \
                        -ujflarose -pStrongPass123! les_vrais_naturels \
                        -e "SELECT '\''admin_users'\'' as tbl, COUNT(*) as cnt FROM admin_users UNION ALL SELECT '\''products'\'', COUNT(*) FROM products UNION ALL SELECT '\''commission_rules'\'', COUNT(*) FROM commission_rules UNION ALL SELECT '\''pharmacies'\'', COUNT(*) FROM pharmacies;" \
                        2>/dev/null || echo "⚠️ DB verify failed - check backend logs above"

                    echo "🌐 API health check:"
                    curl -sf http://localhost:3200/api/admin/auth/login \
                        -X POST \
                        -H "Content-Type: application/json" \
                        -d "{\"phone\":\"0770000000\",\"password\":\"Admin@2026\"}" \
                        && echo "✅ Login endpoint OK" \
                        || echo "⚠️ Login check failed - may still be starting"
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
            echo "🎉 Build #${BUILD_NUMBER} deployed successfully"
            echo "🚀 API:  http://209.74.89.216:3200/api"
            echo "📚 Docs: http://209.74.89.216:3200/api/docs"
            echo "🗄️  DB:   localhost:3307"
        }
        failure {
            sh '''
                echo "❌ Build failed! Dumping logs..."
                docker logs les-vrais-naturels-backend --tail 100 2>/dev/null || true
                docker logs les-vrais-naturels-mysql --tail 30 2>/dev/null || true
            '''
        }
    }
}