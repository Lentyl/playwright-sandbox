pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                bat "docker-compose -f docker-compose.yml up -d "
            }

            steps{
                bat "docker exec -it playwright_docker /bin/bash"
            }

            steps{
                sh "npm install"
                sh "npx playwright test"
            }

        }

/*         stage('cleanup'){

            steps{
                bat "docker-compose -f docker-compose.yml down"
                bat "docker -rm playwright_docker"
            }
        } */

    }

    post {
        always {
            bat "docker-compose -f docker-compose.yml down"
        }
    }

}