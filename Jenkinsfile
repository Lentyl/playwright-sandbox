pipeline{

    agent any

    stages{

        stage('stage-1'){

            steps{
                bat 'winpty docker run -it --rm --name playwright-container -v "%cd%":/app mcr.microsoft.com/playwright:v1.29.2-jammy'
                bat "npm install"
            }
        }

        stage('stage-2'){
            steps{
                bat "npx playwright test"
            }            
        }  
    }

    post {
        always {
            echo "doing clean up"      
        }
    }

}