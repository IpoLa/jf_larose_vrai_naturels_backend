pipeline {
    agent any

    environment {
        APP_NAME          = 'Les Vrais Naturels Backend'
        NODE_ENV          = 'production'
        PORT              = '3200'
        TZ                = 'Africa/Algiers'

        // ── MySQL (containerized) ─────────────────────────────────────────────
        DB_HOST           = 'db'                      // service name inside docker network
        DB_PORT           = '3306'
        DB_HOST_PORT      = '3307'                    // exposed on host (avoid conflict with host mysql)
        DB_USERNAME       = 'jflarose'
        DB_PASSWORD       = 'StrongPass123!'
        DB_DATABASE       = 'les_vrais_naturels'
        MYSQL_ROOT_PASSWORD = 'RootPass123!'
        DATABASE_URL      = "mysql://${DB_USERNAME}:${DB_PASSWORD}@db:3306/${DB_DATABASE}"

        // ── JWT ───────────────────────────────────────────────────────────────
        JWT_SECRET        = 'jf-larose-les-vrais-naturels-super-secret-2026'

        // ── Frontend URLs ─────────────────────────────────────────────────────
        CLIENT_BASE_URL   = 'https://vrainaturel.jf-larose.com'
        ADMIN_BASE_URL    = 'https://vrainaturel-backoffice.jf-larose.com'
        ALLOWED_ORIGINS   = 'https://vrainaturel-backoffice.jf-larose.com,https://vrainaturel.jf-larose.com,https://jflarose-backoffice.sensinglabo.com,https://jflarose-client.sensinglabo.com,http://localhost:3000,http://localhost:5173,http://192.168.1.6:3000,http://192.168.1.4:3000,http://192.168.1.4:8081'

        // ── Docker ────────────────────────────────────────────────────────────
        IMAGE_NAME        = 'les-vrais-naturels-backend'
        CONTAINER_NAME    = 'les-vrais-naturels-backend'
    }

    stages {

        stage('📥 Checkout') {
            steps {
                checkout scm
            }
        }

        stage('📝 Generate .env File') {
            steps {
                script {
                    sh '''
                        rm -f .env

                        cat > .env << ENVEOF
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
ENVEOF

                        echo '✅ .env file generated'
                        cat .env | grep -v PASSWORD | grep -v SECRET
                    '''
                }
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

        stage('🛑 Stop & Remove Old Stack') {
            steps {
                sh '''
                    docker compose down --remove-orphans || true
                    echo '✅ Old stack removed'
                '''
            }
        }

        stage('🚀 Start Docker Compose Stack') {
            steps {
                sh '''
                    docker compose up -d

                    echo '⏳ Waiting for MySQL to be healthy...'
                    for i in $(seq 1 40); do
                        STATUS=$(docker inspect --format='{{.State.Health.Status}}' les-vrais-naturels-mysql 2>/dev/null || echo "unknown")
                        echo "   attempt $i/40 - MySQL status: $STATUS"
                        if [ "$STATUS" = "healthy" ]; then
                            echo '✅ MySQL is ready!'
                            break
                        fi
                        if [ $i -eq 40 ]; then
                            echo '❌ MySQL did not become healthy in time'
                            docker logs les-vrais-naturels-mysql --tail 30
                            exit 1
                        fi
                        sleep 5
                    done
                '''
                echo '✅ Docker Compose stack started'
            }
        }

        stage('🗄️ Prisma Migrate Deploy') {
            steps {
                sh '''
                    docker compose exec -T backend npx prisma migrate deploy
                '''
                echo '✅ Prisma migrations applied'
            }
        }

        stage('🌱 Prisma Seed') {
            steps {
                sh '''
                    docker compose exec -T backend npx tsx prisma/seed.ts
                '''
                echo '✅ Seed completed'
            }
        }

        stage('📊 Verify Database') {
            steps {
                sh '''
                    echo "🔍 Checking tables..."
                    docker compose exec -T db mysql -u jflarose -pStrongPass123! les_vrais_naturels -e "
                        SELECT 'admin_users' as tbl, COUNT(*) as cnt FROM admin_users
                        UNION ALL SELECT 'products', COUNT(*) FROM products
                        UNION ALL SELECT 'commission_rules', COUNT(*) FROM commission_rules
                        UNION ALL SELECT 'pharmacies', COUNT(*) FROM pharmacies
                        UNION ALL SELECT 'vendors', COUNT(*) FROM vendors;
                    " 2>/dev/null || echo "⚠️ Could not verify tables yet"
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
            echo """
╔══════════════════════════════════════════════╗
║  🎉 Deployment Successful - Build #${BUILD_NUMBER}
║  🚀 API:    http://209.74.89.216:3200
║  📚 Docs:   http://209.74.89.216:3200/api/docs
║  🗄️  MySQL:  localhost:3307
╚══════════════════════════════════════════════╝
            """
        }
        failure {
            sh '''
                echo "❌ Deployment failed!"
                echo "=== Backend Logs ==="
                docker compose logs backend --tail 100 2>/dev/null || true
                echo "=== MySQL Logs ==="
                docker compose logs db --tail 50 2>/dev/null || true
            '''
        }
    }
}