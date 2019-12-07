# Hexagonal Architecture & Secure Endpoints using Spring Security

A simple project to show hexagonal architecture concept and use of Spring to secure endpoints with:

- Spring Security for BackEnd (Infrastructure for the Hexagon)
- Oauth 2.0 , OpenID Connect && JWT Tokens
- AWS Cognito as Auth Server
- Angular 8 implementation for Client

## Implementation

0. Create a Auth Server with AWS Cognito (See documentation in confluence)

1. Build the model for the hexagon with this instructions:
- ./poem-usecase/README.md

2. Build the Application for the hexagon with this instructions:
- ./hexagon-back/README.md

3. Build the Client for the hexagon with this instructions:
- ./hexagon-client/README.md
