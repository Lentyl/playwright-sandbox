pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                bat "docker-compose -f docker-compose.yml up"
            }
        }

    }

    post {
        always {
            bat "docker-compose -f docker-compose.yml down"
        }
    }

}