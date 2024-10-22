pipeline{

    agent any

    stages{

        stage('stage-1'){


            steps{
                sh 'docker imags'
                sh 'docker run -it --rm --name playwright-container -v "%cd%":/app mcr.microsoft.com/playwright:v1.29.2-jammy'
            }
        }

        stage('stage-2'){
            steps{
                sh 'npx playwright test'
            }            
        }  
    }

    post {
        always {
            echo "doing clean up"      
        }
    }

}