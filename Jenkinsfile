pipeline {

    agent any

 

    stages {

        stage('Run Playwright Tests') {

            steps {

                bat 'docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from playwright'

            }

        }

    }

 

    post {

        always {

            bat 'docker-compose -f docker-compose.yml down --volumes'

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true


            publishHTML(target: [

                reportDir: 'playwright-report',

                reportFiles: 'index.html',

                reportName: 'Playwright Report',

                keepAll: true,

                alwaysLinkToLastBuild: true,

                allowMissing: true

            ])

        }

    }

}