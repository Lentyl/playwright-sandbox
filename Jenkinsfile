pipeline{

    agent any

    stages{

        stage('stage-1'){

            steps{
                sh 'docker run -it --rm --name playwright-containerr -v "$(pwd):/app" mcr.microsoft.com/playwright:v1.29.2-jammy'
                sh "npm install"
            }
        }

        stage('stage-2'){
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