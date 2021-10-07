pipeline {

  agent {label "jenkins-slave"}
  
  stages {
    
    stage('Preparation') {

      steps {
        git 'https://github.com/ZiadAmr14/sprints-project.git'
      }
    
    }

    stage('Build') {

      steps {
        sh """
            cd angular-src
            docker build -t nadertarekcs/angular-service:latest .
        """
      }
    
    }

    stage('push image') {
            steps {
                withCredentials([usernamePassword(credentialsId:"DockerHub",usernameVariable:"USERNAME",passwordVariable:"PASSWORD")]) {
                    
                    sh """
                      docker login -u ${USERNAME} -p ${PASSWORD}
                      cd angular-src
                      docker push nadertarekcs/angular-service:latest
                    """
                }
            }
        }

    stage('deploy'){
            steps {
                sh 'docker run -d -p 80:80 --name angular-service nadertarekcs/angular-service:latest'
            }    
    }
  }     

}
