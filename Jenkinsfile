pipeline{

    agent any

    stages{

        stage('tests'){

            steps{
                sh "docker-compose -f docker-compose.yml up"
            }
        }
    }

    post {
        always {
            echo "doing clean up"      
        }
    }

}