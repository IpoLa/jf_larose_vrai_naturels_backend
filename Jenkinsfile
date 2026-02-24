pipeline {
    agent any

    environment {
        // ── All configuration values are static / hardcoded here ───────────────
        // WARNING: Visible to anyone with access to this Jenkins job/pipeline

        // Application & Server
        APP_NAME         = 'Les Vrais Naturels Backend'
        NODE_ENV         = 'production'
        PORT             = '3200'
        TZ               = 'Africa/Algiers'

        // Database (MySQL)
        DB_HOST          = 'your-db-host'           // ← CHANGE THIS
        DB_PORT          = '3306'
        DB_USERNAME      = 'root'
        DB_PASSWORD      = '0664571928'
        DB_DATABASE      = 'les_vrais_naturels'
        DATABASE_URL     = "mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}"

        // JWT
        JWT_SECRET       = 'jf-larose-les-vrais-naturels-super-secret-2026'

        // Frontend URLs
        CLIENT_BASE_URL  = 'https://jflarose-client.sensinglabo.com'
        ADMIN_BASE_URL   = 'https://jflarose-backoffice.sensinglabo.com'

        // Docker settings
        CONTAINER_NAME   = 'les-vrais-naturels-backend'
        IMAGE_NAME       = 'les-vrais-naturels-backend'  // local image name
        HOST_PORT        = "${PORT}"
        INTERNAL_PORT    = '3000'   // port your NestJS listens on inside container
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

                    // Core app settings
                    sh "echo APP_NAME='${APP_NAME}' >> .env"
                    sh "echo NODE_ENV=${NODE_ENV} >> .env"
                    sh "echo PORT=${PORT} >> .env"
                    sh "echo TZ=${TZ} >> .env"

                    // Database
                    sh "echo DATABASE_URL='${DATABASE_URL}' >> .env"

                    // JWT
                    sh "echo JWT_SECRET='${JWT_SECRET}' >> .env"

                    // Frontend origins
                    sh "echo CLIENT_BASE_URL='${CLIENT_BASE_URL}' >> .env"
                    sh "echo ADMIN_BASE_URL='${ADMIN_BASE_URL}' >> .env"

                    // Optional: add more variables here if needed
                    // sh "echo SOME_OTHER_KEY=value >> .env"

                    echo '✅ .env file generated successfully'
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
                echo '✅ Docker image built successfully'
            }
        }

        stage('🛑 Stop & Remove Existing Container') {
            steps {
                sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                        echo '✅ Old container stopped and removed'
                    else
                        echo 'ℹ️ No existing container found'
                    fi
                """
            }
        }

        // Optional: Prisma migrate reset (uncomment if you want to reset DB on every deploy)
        // stage('🗄️ Prisma Migrate Reset') {
        //     steps {
        //         sh """
        //             docker run --rm --env-file .env ${IMAGE_NAME}:latest \
        //             npx prisma migrate reset --force
        //         """
        //         echo '✅ Prisma database reset completed'
        //     }
        // }

        stage('🚀 Run New Backend Container') {
            steps {
                sh """
                    docker run -d \
                        --name ${CONTAINER_NAME} \
                        --restart unless-stopped \
                        --env-file .env \
                        -p ${HOST_PORT}:${INTERNAL_PORT} \
                        ${IMAGE_NAME}:latest
                """
                echo "✅ Container ${CONTAINER_NAME} started on port ${HOST_PORT}"
                echo "API should be available at: http://${SERVER_HOST}:${HOST_PORT}"
            }
        }
    }

    post {
        always {
            // Clean workspace to avoid disk space issues
            cleanWs()
            echo '🧹 Workspace cleaned'
        }
        success {
            echo "🎉 Pipeline completed successfully! Build #${BUILD_NUMBER}"
        }
        failure {
            echo '❌ Pipeline failed - check logs above'
        }
    }
}