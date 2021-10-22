pipeline {

  agent none

  stages {

    stage('Preparation') {

      agent {
        label 'jenkins-slave'
      }

      steps {
        git 'https://github.com/ZiadAmr14/sprints-project.git'
      }

    }

    stage('Building Images') {

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
      post {
        failure {
          slackSend(color: '#FF0000', message: "Building Images has Failed")
        }
      }

    }

    stage('Pushing Images') {

      agent {
        label 'jenkins-slave'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: "DockerHub", usernameVariable: "USERNAME", passwordVariable: "PASSWORD")]) {

          sh """
          docker login -u ${USERNAME} -p ${PASSWORD}
          docker push nadertarekcs/angular-service:latest
          docker push nadertarekcs/back-end-service:latest 
          """
        }
      }
      post {
        failure {
          slackSend(color: '#FF0000', message: "Pushing Images has Failed")
        }
      }
    }

    stage('Deployment') {
      agent {
        label 'docker-containers'
      }

      steps {
        sh 'docker-compose up -d '
      }

      post {
        success {
          slackSend(color: '#00FF00', message: "Application has been Deployed Successfully")
        }

        failure {
          slackSend(color: '#FF0000', message: "Deployment Failed")

        }
      }
    }
  }

}
