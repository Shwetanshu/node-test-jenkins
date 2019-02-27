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
				sh '''
					export PATH=/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin'
					npm init
					npm test
				'''
			}
		}
		
		stage('deploy'){
			steps{
				echo 'Code Deployed..'
			}
		}
	}
}