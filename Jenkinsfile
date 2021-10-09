pipeline {

  agent {label "jenkins-slave"}
  
  stages {
    
    stage('preparation') {

      steps {
        git 'https://github.com/ZiadAmr14/sprints-project.git'
      }
    
    }

    stage('build') {

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
      steps {
                sh 'docker kill angular-service'
                sh 'docker run -d -p 80:80 --name angular-service nadertarekcs/angular-service:latest'
                sh 'docker run -d -p 5000:8080 --name back-end-service nadertarekcs/back-end-service:latest'
            }    
    }
  }     

}
