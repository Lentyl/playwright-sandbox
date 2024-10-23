pipeline{

    agent {
        docker{
            image "alpine"
        }
    }

    stages{

        stage('instalation'){

            steps{
                sh "wget www.google.com"
            }
        }

        stage('tests'){
            steps{
                sh "npx playwright test"
            }            
        }  
    }

    post {
        always {
            echo "doing clean up"      
        }
    }

}