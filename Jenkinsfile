pipeline{

    agent {
        docker{
            image "mcr.microsoft.com/playwright:v1.29.2-jammy"
        }
    }

    stages{

        stage('instalation'){

            steps{
                sh "npm install"
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