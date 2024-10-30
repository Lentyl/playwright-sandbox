pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                bat 'docker run -it --rm --name playwright-container -v "$(pwd):/app" mcr.microsoft.com/playwright:v1.48.1-jammy'
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