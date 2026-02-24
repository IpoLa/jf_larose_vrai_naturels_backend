pipeline {
    agent any

    environment {
        // ── Real / secure values ───────────────────────────────────────────────

        APP_NAME         = 'Les Vrais Naturels Backend'
        NODE_ENV         = 'development'
        PORT             = '3200'
        TZ               = 'Africa/Algiers'

        // ── MySQL Database (real values) ──────────────────────────────────────
        DB_HOST          = 'localhost'
        DB_PORT          = '3306'
        DB_USERNAME      = 'jflarose'
        DB_PASSWORD      = 'StrongPass123!'
        DB_DATABASE      = 'les_vrais_naturels'
        DATABASE_URL     = "mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"

        // JWT
        JWT_SECRET       = 'jf-larose-les-vrais-naturels-super-secret-2026'  // ← CHANGE THIS!

        // Frontend URLs
        CLIENT_BASE_URL  = 'https://jflarose-client.sensinglabo.com'
        ADMIN_BASE_URL   = 'https://jflarose-backoffice.sensinglabo.com'

        // Docker settings
        CONTAINER_NAME   = 'les-vrais-naturels-backend'
        IMAGE_NAME       = 'les-vrais-naturels-backend'
        HOST_PORT        = "${PORT}"
        INTERNAL_PORT    = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('📝 Generate .env File') {
            steps {
                script {
                    sh 'rm -f .env || true'

                    sh "echo APP_NAME='${APP_NAME}' >> .env"
                    sh "echo NODE_ENV=${NODE_ENV} >> .env"
                    sh "echo PORT=${PORT} >> .env"
                    sh "echo TZ=${TZ} >> .env"

                    sh "echo DATABASE_URL='${DATABASE_URL}' >> .env"
                    sh "echo JWT_SECRET='${JWT_SECRET}' >> .env"

                    sh "echo CLIENT_BASE_URL='${CLIENT_BASE_URL}' >> .env"
                    sh "echo ADMIN_BASE_URL='${ADMIN_BASE_URL}' >> .env"

                    echo '✅ .env file generated'
                }
            }
        }

        stage('🐳 Build Docker Image') {
            steps {
                sh """
                    docker build \
                        --no-cache \
                        -t ${IMAGE_NAME}:${BUILD_NUMBER} \
                        -t ${IMAGE_NAME}:latest \
                        .
                """
                echo '✅ Docker image built'
            }
        }

        stage('🛑 Stop & Remove Old Container') {
            steps {
                sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                        echo '✅ Old container removed'
                    else
                        echo 'ℹ️ No old container found'
                    fi
                """
            }
        }

        stage('🗄️ Prisma Migrate') {
            steps {
                sh """
                    docker run --rm --env-file .env ${IMAGE_NAME}:latest \
                    npx prisma migrate deploy
                """
                echo '✅ Prisma migrations applied'
            }
        }

        stage('🚀 Start New Container') {
            steps {
                sh """
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        --env-file .env \
                        -p ${HOST_PORT}:${INTERNAL_PORT} \
                        ${IMAGE_NAME}:latest
                """
                echo "✅ Container started → http://209.74.89.216:${HOST_PORT}"
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
        }
        failure {
            echo '❌ Deployment failed - check logs'
        }
    }
}