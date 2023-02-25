pipeline {
    agent any
    
    environment {
        def dockerhub = credentials('dockerhub')
    }
    
    stages {
        
        stage('Clone'){
            steps{
                git branch: 'dev', credentialsId: 'jenkins-backend', url: 'git@github.com:Atheros7/anime_list_frontend.git'
                sh "git branch -D staging || true"
                sh "git checkout -b staging"                
            }
        }
        
        stage('Build') {
            steps {
              sh 'npm install'
              sh 'npm run build'
            }      
        }
        
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
        stage('Merge') {
            steps {
                script {
                    def merge = input(
                        message: 'Do you want to merge with the main branch?',
                        parameters: [
                            booleanParam(defaultValue: false, description: '', name: 'merge')
                        ]
                    )
                    
                    if (merge) {
                        sh 'git checkout main'
                        sh 'git merge --no-ff staging'
                        sshagent(credentials: ['jenkins-backend']){
                            sh 'git push origin main'
                        }
                    }
                    sh 'echo "Current Branch: $(git rev-parse --abbrev-ref HEAD)"'
                }
            }
        }
        
        stage('Docker') {
          steps {
              script {
                  def currentBranch = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
                  if (currentBranch == 'main') {
                      sh 'docker image build -t jeandevise/anime-frontend:latest .'
                      sh 'docker login -u=${dockerhub_USR} -p=${dockerhub_PSW}'
                      sh 'docker push jeandevise/anime-frontend:latest'
                  } else {
                      echo "Skipping Docker build and push because current branch is ${currentBranch}"
                  }
              }
          }
        }
        
    }
}
