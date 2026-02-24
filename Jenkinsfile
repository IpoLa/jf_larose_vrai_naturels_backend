pipeline {
    agent any

    environment {
        // ── Static values embedded directly in pipeline ────────────────────────
        // WARNING: These are visible to anyone who can see this pipeline/job
        DATABASE_URL     = 'mysql://root:0664571928@your-db-host:3306/les_vrais_naturels'
        JWT_SECRET       = 'jf-larose-les-vrais-naturels-super-secret-2026'
        PORT             = '3200'
        CLIENT_BASE_URL  = 'https://jflarose-client.sensinglabo.com'
        ADMIN_BASE_URL   = 'https://jflarose-backoffice.sensinglabo.com'

        // Docker image settings
        DOCKER_IMAGE     = 'IpoLa/les-vrais-naturels-backend'
        DOCKER_TAG       = "${env.BRANCH_NAME == 'main' ? 'latest' : 'dev-' + env.BUILD_NUMBER}"
        CONTAINER_NAME   = 'les-vrais-naturels-backend'
        HOST_PORT        = "${PORT}"
        INTERNAL_PORT    = '3000'
        SERVER_USER      = 'ubuntu'
        SERVER_HOST      = '209.74.89.216'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm ci'
                sh 'npx prisma generate'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                """
            }
        }

        stage('Push to Registry') {
            when { branch 'main' }
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker push ${DOCKER_IMAGE}:latest
                    '''
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                sshagent(credentials: ['server-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_HOST} << 'EOF'
                            docker pull ${DOCKER_IMAGE}:latest

                            docker stop ${CONTAINER_NAME} || true
                            docker rm ${CONTAINER_NAME} || true

                            docker run -d \
                                --name ${CONTAINER_NAME} \
                                --restart unless-stopped \
                                -p ${HOST_PORT}:${INTERNAL_PORT} \
                                -e DATABASE_URL="${DATABASE_URL}" \
                                -e JWT_SECRET="${JWT_SECRET}" \
                                -e PORT="${INTERNAL_PORT}" \
                                -e CLIENT_BASE_URL="${CLIENT_BASE_URL}" \
                                -e ADMIN_BASE_URL="${ADMIN_BASE_URL}" \
                                ${DOCKER_IMAGE}:latest

                            echo "Deployment done → http://${SERVER_HOST}:${HOST_PORT}"
                        EOF
                    """
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
        success {
            echo "Deployment successful - ${DOCKER_IMAGE}:${DOCKER_TAG}"
        }
        failure {
            echo "Deployment failed"
        }
    }
}