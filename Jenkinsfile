pipeline {

  agent none
  
  stages {
    
    stage('preparation') {
      
      agent { 
            label 'jenkins-slave'
      }
      
      steps {
        git 'https://github.com/ZiadAmr14/sprints-project.git'
      }
    
    }

    stage('build') {
      
       agent { 
            label 'jenkins-slave'
      }

      steps {
        sh """
            cd angular-src
            docker build -t nadertarekcs/angular-service:latest .
            cd ..
            docker build -t nadertarekcs/back-end-service:latest .
        """
      }
    
    }

    stage('push image') {
      
       agent { 
            label 'jenkins-slave'
      }
            steps {
                withCredentials([usernamePassword(credentialsId:"DockerHub",usernameVariable:"USERNAME",passwordVariable:"PASSWORD")]) {
                    
                    sh """
                      docker login -u ${USERNAME} -p ${PASSWORD}
                      docker push nadertarekcs/angular-service:latest
                      docker push nadertarekcs/back-end-service:latest
                    """
                }
            }
        }

    stage('deploy'){
       agent { 
            label 'docker-containers'
      }
      steps {
                
                sh 'docker-compose up -d '
            }    
    }
  }     

}
