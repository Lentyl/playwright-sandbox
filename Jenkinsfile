pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                bat "docker-compose -f docker-compose.yml up"
            }

            steps{
                bat "docker -rm playwright_docker"
            }
        }
    }

    post {
        always {
            echo "doing clean up"      
        }
    }

}