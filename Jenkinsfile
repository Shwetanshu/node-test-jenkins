pipeline {
	agent any
	stages{
		
		stage('init'){
			steps{
				echo "Testing.."
			}
		}
		
		stage('build'){
			steps{
				sh 'npm init'
				sh 'npm test'
			}
		}
		
		stage('deploy'){
			steps{
				echo 'Code Deployed..'
			}
		}
	}
}