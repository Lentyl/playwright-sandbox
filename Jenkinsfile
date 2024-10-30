pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                bat "docker-compose -f docker-compose.yml up"
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
            cleanWs()
            bat "docker -rm playwright_docker"
        }
    }

}