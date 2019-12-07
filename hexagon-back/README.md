# Hexagonal Backend  
  
Application/Infrastructure  part for Hexagonal Architecture project.  
Build and run JAR in maven local repository.  
  
## Installation  
In root folder:  
  
$ ./gradlew clean build  
  
## Running a MAIN instance:  
- Use JDK 11  
- Assuming localhost execution for all instances

Export JWK keys repository of the Auth Server as environment variable: 

`
export jwkSetUri=https://cognito-idp.us-east-1.amazonaws.com/us-east-1_DdEk2qzAF/.well-known/jwks.json  
`
This structure is valid for AWS Cognito, but every Auth server exposes a service "... /.well-known/jwks.json "  
  
In root folder:  

    java -Dserver.port=<:port> \  
           -Dsec=<:authorization-type> \  
           -DsubUrl=<:subsidiary-path> \  
           -jar ./build/libs/hexagon-lab-0.0.1-SNAPSHOT.jar
      
**port** 
*Web server port for this instance*  

**authorization-type**
*auth: (DEFAULT)  For security with authorities and scopes*  
*role: For security based in roles* 
  
**subsidiary-path**  
*Host of Subsidiary instance (needed for one case)*
  
### Example:  
`java -Dserver.port=8080 \  
 -Dsec=auth \  
 -DsubUrl=http://localhost:8081 \  
 -jar ./build/libs/hexagon-lab-0.0.1-SNAPSHOT.jar ` 
         
         
## Running a SUBSIDIARY instance:  
- Using same command as before, skip -DsubUrl property:  
  
### Example:  

`java -Dserver.port=8081 \  
-Dsec=role \  
-jar ./build/libs/hexagon-lab-0.0.1-SNAPSHOT.jar`
